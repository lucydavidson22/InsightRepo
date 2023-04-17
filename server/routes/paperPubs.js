const sequenceGenerator = require('./sequenceGenerator');
const PaperPub = require('../models/paperPub');

var express = require('express');
var router = express.Router();
module.exports = router;

router.get("/", (req, res, next) => {
  PaperPub.find()
  .then(paperPubs => {
    if(!paperPubs){
      return res.status(500).json({
        message: "PaperPubs were not fetched!"
      })
    }
    return res.status(200).json(paperPubs);
  });
});

router.post('/', (req, res, next) => {
  console.log('paperPubs posted?');
  const maxPaperPubId = sequenceGenerator.nextId("paperPubs");

  const paperPub = new PaperPub({
    id: maxPaperPubId,
    name: req.body.name,
    year: req.body.year,
    pub: req.body.pub,
    cat: req.body.cat,
    projDesc: req.body.projDesc,
    profPage: req.body.profPage,
    topic: req.body.topic,
  });

  paperPub.save()
    .then(createdPaperPub => {
      res.status(201).json({
        message: 'PaperPub added successfully',
        paperPub: createdPaperPub
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
  PaperPub.findOne({ id: req.params.id })
    .then(paperPub => {
      paperPub.name = req.body.name;
      paperPub.year = req.body.year;
      paperPub.pub = req.body.pub;
      paperPub.cat = req.body.cat;
      paperPub.projDesc = req.body.projDesc;
      paperPub.profPage = req.body.profPage;
      paperPub.topic = req.body.topic;

      PaperPub.updateOne({ id: req.params.id }, paperPub)
        .then(result => {
          res.status(204).json({
            message: 'PaperPub updated successfully'
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
        message: 'PaperPub not found.',
        error: { paperPub: 'PaperPub not found'}
      });
    });
});

router.delete("/:id", (req, res, next) => {
  PaperPub.findOne({ id: req.params.id })
    .then(paperPub => {
      PaperPub.deleteOne({ id: req.params.id })
        .then(result => {
          res.status(204).json({
            message: "PaperPub deleted successfully"
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
        message: 'PaperPub not found.',
        error: { paperPub: 'PaperPub not found'}
      });
    });
});
