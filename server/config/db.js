import mongoose from 'mongoose';

mongoose.connect('mongodb://jbuckley-interview.plaid.com:27017/platform-interview');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('server has connected successfully'));