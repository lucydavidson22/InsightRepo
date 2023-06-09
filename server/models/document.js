const mongoose = require('mongoose');

const documentSchema = mongoose.Schema({
   id: { type: String, required: true },
   name: { type: String, required: true },
   url: { type: String },
   date: { type: String },
   clientSponsor: { type:String },
   location: { type: String },
   publication: { type: String },
   category: { type:String },
   tangibleItems: { type:String },
   description: { type: String },
   profileStartedBy: { type:String },
   profileStatus: { type:String },
   creator: { type:mongoose.Schema.Types.ObjectId, ref: 'User', required: true}
});

module.exports = mongoose.model('Document', documentSchema);
