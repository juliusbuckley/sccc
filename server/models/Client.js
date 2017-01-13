import mongoose from 'mongoose';
mongoose.Promise = require('bluebird');

const clientSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  company_name: String,
  contact_name: String,
  email: String,
});

export default mongoose.model('Client', clientSchema);