const mongoose = require('mongoose');

const projChoiceSchema = mongoose.Schema({
   id: { type: String, required: true },
   name: { type: String, required: true },
   proposedBy: { type: String },
   status: { type: String, enum: ['topTwenty', 'backup', 'underConsideration', 'notUnderConsideration'] },
   children: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ProjChoice' }]
});

module.exports = mongoose.model('ProjChoice', projChoiceSchema);
