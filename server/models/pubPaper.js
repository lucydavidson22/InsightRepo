const mongoose = require('mongoose');

const pubPaperSchema = mongoose.Schema({
   id: { type: String, required: true },
   name: { type: String, required: true },
   year: { type:String },
   pub: { type:String },
   cat: { type:String },
   projDesc: { type:String },
   profPage: { type:String},
   topic: { type:String },
   citation: { type:String },
   creator: { type:mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
   children: [{ type: mongoose.Schema.Types.ObjectId, ref: 'PubPaper' }]

});

module.exports = mongoose.model('PubPaper', pubPaperSchema);
