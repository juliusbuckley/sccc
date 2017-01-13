import db from '../config/db';
import mongoose from 'mongoose';
import Client from '../models/Client';
import Item from '../models/Item';
import { serialize } from './tokenFunctions';
import appendToFile from '../appendToFile';
mongoose.Promise = require('bluebird');

Client.find({}).exec()
  .then(clients => {
    clients.forEach(client => {
      Item.find({'_client': client._id}).exec()
        .then(items => {
          items.forEach(item => {
            appendToFile('tokenList.txt', serialize(client._id, item._id, item.institution_type));
          });
        })
        .catch(err => console.log(`Item not in db: ${err}`));
    });
  })
  .catch(err => console.log(`Client not in db: ${err}`));