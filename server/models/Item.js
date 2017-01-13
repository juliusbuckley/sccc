import mongoose from 'mongoose';

const itemSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  _client: { type: mongoose.Schema.Types.ObjectId, ref: 'Client' },
  institution_type: String
});

export default mongoose.model('Item', itemSchema);