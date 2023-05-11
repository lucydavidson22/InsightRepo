const sequenceGenerator = require('./sequenceGenerator');
const ProjChoice = require('../models/projChoice');
const checkAuth = require("../middleware/check-auth")


var express = require('express');
var router = express.Router();

router.get("/", (req, res, next) => {
  ProjChoice.find()
  .then(projChoices => {
    if(!projChoices){
      return res.status(500).json({
        message: "ProjChoices were not fetched!"
      })
    }
    return res.status(200).json(projChoices);
  })
  .catch(error => {
    res.status(500).json({
      message: "Fetching project choices failed"
    });
  });
});

router.post('/', checkAuth, (req, res, next) => {
  console.log('projChoices posted?');
  const maxProjChoiceId = sequenceGenerator.nextId("projChoices");

  const projChoice = new ProjChoice({
    id: maxProjChoiceId,
    name: req.body.name,
    proposedBy: req.body.proposedBy,
    status: req.body.status,
    creator: req.userData.userId
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

router.put('/:id', checkAuth, (req, res, next) => {
  ProjChoice.findOne({ id: req.params.id })
    .then(projChoice => {
      projChoice.name = req.body.name;
      projChoice.proposedBy = req.body.proposedBy;
      projChoice.status = req.body.status;
      projChoice.creator = req.userData.userId;

      ProjChoice.updateOne({ id: req.params.id , creator: req.userData.userId}, projChoice)
        .then(result => {
          console.log(result);
          if(result.modifiedCount > 0){
            res.status(204).json({ message: "ProjChoice updated successfully!"});
            console.log("the user updated their project!");
          } else {
            res.status(401).json({ message: "Not authorized!"});
          }
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

router.delete("/:id", checkAuth, (req, res, next) => {
  ProjChoice.findOne({ id: req.params.id })
    .then(projChoice => {
      ProjChoice.deleteOne({ id: req.params.id, creator: req.userData.userId })
        .then(result => {
          res.status(204).json({
            message: "ProjChoice deleted successfully"
          });
        })
        .catch(error => {
           res.status(500).json({
           message: 'Deletion failed',
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

module.exports = router;