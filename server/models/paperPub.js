const mongoose = require('mongoose');

const paperPubSchema = mongoose.Schema({
   id: { type: String, required: true },
   name: { type: String, required: true },
   year: { type: String },
   pub: { type:String },
   cat: { type:String },
   projDesc: { type: String },
   profPage: { type:String },
   topic: { type:String },
   children: [{ type: mongoose.Schema.Types.ObjectId, ref: 'PaperPub' }]
});

module.exports = mongoose.model('PaperPub', paperPubSchema);
