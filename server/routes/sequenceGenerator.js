var Sequence = require('../models/sequence');
// const res = require("express/lib/response");

var maxDocumentId;
var maxPubPaperId;
var sequenceId = null;

function SequenceGenerator() {
  Sequence.findOne()
  .exec(function(err, sequence) {
    if (err) {
      console.log("An error occurred: ", err);
    } else if (!sequence) {
      console.log("Sequence not found");
    }
    else {
      sequenceId = sequence._id;
      maxDocumentId = sequence.maxDocumentId;
      maxPubPaperId = sequence.maxPubPaperId;
    }
  });

}

SequenceGenerator.prototype.nextId = function(collectionType) {

  var updateObject = {};
  var nextId;

  switch (collectionType) {
    case 'documents':
      maxDocumentId++;
      updateObject = {maxDocumentId: maxDocumentId};
      console.log('get the maxId');
      nextId = maxDocumentId;
      break;
    case 'pubPapers':
      maxPubPaperId++;
      updateObject = { maxPubPaperId: maxPubPaperId };
      console.log('get the max id of pubpapers');
      nextId = maxPubPaperId;
      break;
    default:
      return -1;
  }

  // Sequence.update({_id: sequenceId}, {$set: updateObject},
  Sequence.update({_id: sequenceId}, {$set: updateObject},
    function(err) {
      if (err) {
        console.log("nextId error = " + err);
        return null
      }
    });

  return nextId;
}

module.exports = new SequenceGenerator();
