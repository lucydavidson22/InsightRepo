const mongoose = require('mongoose');

const sequenceSchema = mongoose.Schema({
  maxDocumentId: {type: String, required: true},
  maxProjChoiceId: {type:String, required: true },
  maxPubPaperId: {type:String, required: true}
});

module.exports = mongoose.model('Sequence', sequenceSchema);
