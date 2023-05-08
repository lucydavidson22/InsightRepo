const DocumentController = require('../controllers/documents');
const checkAuth = require("../middleware/check-auth")

var express = require('express');
var router = express.Router();

router.get("/", DocumentController.createDocument);

router.post('/', checkAuth, DocumentController.updateDocument);

router.put('/:id', checkAuth, DocumentController.getDocument);

router.delete("/:id", checkAuth, DocumentController.deleteDocument);

module.exports = router;