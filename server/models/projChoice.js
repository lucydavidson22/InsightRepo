const mongoose = require('mongoose');

const projChoiceSchema = mongoose.Schema({
   id: { type: String, required: true },
   name: { type: String, required: true },
   topTwenty: { type: Boolean },
   children: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ProjChoice' }]
});

module.exports = mongoose.model('ProjChoice', projChoiceSchema);
