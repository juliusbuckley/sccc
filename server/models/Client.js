import mongoose from 'mongoose';

const clientSchema = mongoose.Schema({
  company_name: String,
  contact_name: String,
  email: String,
});

export default mongoose.model('Client', clientSchema);