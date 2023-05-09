// const DocumentController = require('../controllers/documents');
const sequenceGenerator = require('./sequenceGenerator');
const Document = require('../models/document');
const checkAuth = require("../middleware/check-auth")

var express = require('express');
var router = express.Router();

// router.get("/", DocumentController.createDocument);
router.get("/", (req, res, next) => {
    Document.find()
    .then(documents => {
      if(!documents){
        return res.status(500).json({
          message: "Documents were not fetched!"
        })
      }
      return res.status(200).json(documents);
    })
    .catch(error => {
      res.status(500).json({
        message: "Fetching posts failed"
      });
    });
  });

// router.post('/', checkAuth, DocumentController.updateDocument);
router.post('/', (req, res, next) => {
    console.log('documents posted?');
    const maxDocumentId = sequenceGenerator.nextId("documents");
  
    const document = new Document({
      id: maxDocumentId,
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
      profileStatus: req.body.profileStatus,
      creator: req.userData.userId
    });
  
    document.save()
      .then(createdDocument => {
        res.status(201).json({
          message: 'Document added successfully',
          document: createdDocument
        });
      })
      .catch(error => {
         res.status(500).json({
            message: 'Creating a post failed!',
            error: error
          });
      });
  });

// router.put('/:id', checkAuth, DocumentController.getDocument);
router.put('/:id', checkAuth, (req, res, next) => {
    Document.findOne({ id: req.params.id })
      .then(document => {
        document.name = req.body.name;
        document.url = req.body.url;
        document.date = req.body.date;
        document.clientSponsor = req.body.clientSponsor;
        document.location = req.body.location;
        document.publication = req.body.publication;
        document.category = req.body.category;
        document.tangibleItems = req.body.tangibleItems;
        document.description = req.body.description;
        document.profileStartedBy = req.body.profileStartedBy;
        document.profileStatus = req.body.profileStatus;
        document.creator = req.userData.userId;
  
        Document.updateOne({ id: req.params.id, creator: req.userData.userId }, document)
          .then(result => {
            console.log(result);
            if(result.modifiedCount > 0){
              res.status(200).json({ message: "Update successful!"});
              console.log("the user updated their project!");
            } else {
              res.status(401).json({ message: "Not authorized!"});
            }
          })
          .catch(error => {
             res.status(500).json({
             message: "Couldn't update post!",
             error: error
           });
          });
      })
      .catch(error => {
        res.status(500).json({
          message: 'Document not found.',
          error: { document: 'Document not found'}
        });
      })
  
  });

// router.delete("/:id", checkAuth, DocumentController.deleteDocument);
router.delete("/:id", checkAuth, (req, res, next) => {
    Document.findOne({ id: req.params.id })
      .then(document => {
        Document.deleteOne({ id: req.params.id, creator: req.userData.userId })
          .then(result => {
            console.log(result);
            res.status(204).json({
              message: "Document deleted successfully"
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
          message: 'Document not found.',
          error: { document: 'Document not found'}
        });
      });
  });

module.exports = router;