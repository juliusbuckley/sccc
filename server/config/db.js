import mongoose from 'mongoose';
import appendToFile from '../appendToFile';
import { serialize, deserialize } from '../utils/tokenFunctions';

mongoose.connect('mongodb://jbuckley-interview.plaid.com:27017/platform-interview');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

export default db;