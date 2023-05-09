const sequenceGenerator = require('./sequenceGenerator');
const ProjChoice = require('../models/projChoice');

var express = require('express');
var router = express.Router();
module.exports = router;

router.get("/", (req, res, next) => {
  ProjChoice.find()
  .then(projChoices => {
    if(!projChoices){
      return res.status(500).json({
        message: "ProjChoices were not fetched!"
      })
    }
    return res.status(200).json(projChoices);
  });
});

router.post('/', (req, res, next) => {
  console.log('projChoices posted?');
  const maxProjChoiceId = sequenceGenerator.nextId("projChoices");

  const projChoice = new ProjChoice({
    id: maxProjChoiceId,
    name: req.body.name,
    proposedBy: req.body.proposedBy,
    status: req.body.status
  });
  console.log("projChoice, look for body status", projChoice);

  projChoice.save()
    .then(createdProjChoice => {
      res.status(201).json({
        message: 'ProjChoice added successfully',
        projChoice: createdProjChoice
      });
    })
    .catch(error => {
       res.status(500).json({
          message: 'An error occurred',
          error: error
        });
    });
});

router.put('/:id', (req, res, next) => {
  ProjChoice.findOne({ id: req.params.id })
    .then(projChoice => {
      projChoice.name = req.body.name;
      projChoice.proposedBy = req.body.proposedBy;
      projChoice.status = req.body.status;

      ProjChoice.updateOne({ id: req.params.id }, projChoice)
        .then(result => {
          res.status(204).json({
            message: 'ProjChoice updated successfully'
          })
        })
        .catch(error => {
           res.status(500).json({
           message: 'An error occurred',
           error: error
         });
        });
    })
    .catch(error => {
      res.status(500).json({
        message: 'ProjChoice not found.',
        error: { projChoice: 'ProjChoice not found'}
      });
    });
});

router.delete("/:id", (req, res, next) => {
  ProjChoice.findOne({ id: req.params.id })
    .then(projChoice => {
      ProjChoice.deleteOne({ id: req.params.id })
        .then(result => {
          res.status(204).json({
            message: "ProjChoice deleted successfully"
          });
        })
        .catch(error => {
           res.status(500).json({
           message: 'An error occurred',
           error: error
         });
        })
    })
    .catch(error => {
      res.status(500).json({
        message: 'ProjChoice not found.',
        error: { projChoice: 'ProjChoice not found'}
      });
    });
});
