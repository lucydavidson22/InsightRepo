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
    url: req.body.url,
    date: req.body.date,
    clientSponsor: req.body.clientSponsor,
    location: req.body.location,
    publication: req.body.publication,
    category: req.body.category,
    tangibleItems: req.body.tangibleItems,
    description: req.body.description,
    profileStartedBy: req.body.profileStartedBy,
    profileStatus: req.body.profileStatus
  });

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
      projChoice.url = req.body.url;
      projChoice.date = req.body.date;
      projChoice.clientSponsor = req.body.clientSponsor;
      projChoice.location = req.body.location;
      projChoice.publication = req.body.publication;
      projChoice.category = req.body.category;
      projChoice.tangibleItems = req.body.tangibleItems;
      projChoice.description = req.body.description;
      projChoice.profileStartedBy = req.body.profileStartedBy;
      projChoice.profileStatus = req.body.profileStatus;

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
