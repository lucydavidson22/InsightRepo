const sequenceGenerator = require('./sequenceGenerator');
const PubPaper = require('../models/pubPaper');

var express = require('express');
var router = express.Router();
module.exports = router;

router.get("/", (req, res, next) => {
  PubPaper.find()
  .then(pubPapers => {
    if(!pubPapers){
      return res.status(500).json({
        message: "PubPapers were not fetched!"
      })
    }
    return res.status(200).json(pubPapers);
  });
});

router.post('/', (req, res, next) => {
  console.log('pubPapers posted?');
  const maxPubPaperId = sequenceGenerator.nextId("pubPapers");

  const pubPaper = new PubPaper({
    id: maxPubPaperId,
    name: req.body.name,
    year: req.body.year,
    pub: req.body.pub,
    cat: req.body.cat,
    projDesc: req.body.projDesc,
    profPage: req.body.profPage,
    topic: req.body.topic,
    citation: req.body.citation,
    creator: req.userData.userId
  });

  pubPaper.save()
    .then(createdPubPaper => {
      res.status(201).json({
        message: 'PubPaper added successfully',
        pubPaper: createdPubPaper
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
  PubPaper.findOne({ id: req.params.id })
    .then(pubPaper => {
      pubPaper.name = req.body.name;
      pubPaper.year = req.body.year,
      pubPaper.pub = req.body.pub,
      pubPaper.cat = req.body.cat,
      pubPaper.projDesc = req.body.projDesc,
      pubPaper.profPage = req.body.profPage,
      pubPaper.topic = req.body.topic,
      pubPaper.citation = req.body.citation,
      pubPaper.creator = req.userData.userId

      PubPaper.updateOne({ id: req.params.id }, pubPaper)
        .then(result => {
          res.status(204).json({
            message: 'PubPaper updated successfully'
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
        message: 'PubPaper not found.',
        error: { pubPaper: 'PubPaper not found'}
      });
    });
});

router.delete("/:id", (req, res, next) => {
  PubPaper.findOne({ id: req.params.id })
    .then(pubPaper => {
      PubPaper.deleteOne({ id: req.params.id })
        .then(result => {
          res.status(204).json({
            message: "PubPaper deleted successfully"
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
        message: 'PubPaper not found.',
        error: { pubPaper: 'PubPaper not found'}
      });
    });
});
