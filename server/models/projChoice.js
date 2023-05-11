const mongoose = require('mongoose');

const projChoiceSchema = mongoose.Schema({
   id: { type: String, required: true },
   name: { type: String, required: true },
   proposedBy: { type: String },
   status: { type: String, enum: ['topTwenty', 'backup', 'underConsideration', 'notUnderConsideration'] },
   creator: { type:mongoose.Schema.Types.ObjectId, ref: 'User', required: true}
});

module.exports = mongoose.model('ProjChoice', projChoiceSchema);
