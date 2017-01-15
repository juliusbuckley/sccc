import _ from 'lodash';
import db from '../config/db';
import mongoose from 'mongoose';
import Client from '../models/Client';
import Item from '../models/Item';
import { serialize } from './tokenFunctions';
import appendToFile from '../appendToFile';
mongoose.Promise = require('bluebird');

// Client.find({}).exec()
//   .then(clients => {
//     clients.forEach(client => {
//       Item.find({'_client': client._id}).exec()
//         .then(items => {
//           items.forEach(item => {
//             appendToFile('tokenList.txt', serialize(client._id, item._id, item.institution_type));
//           });
//         })
//         .catch(err => console.log(`Item not in db: ${err}`));
//     });
//   })
//   .catch(err => console.log(`Client not in db: ${err}`));

Client.find({}).exec()
  .then(clients => {
    return Promise.all(clients.map(client => {
      return Item.find({'_client': client._id}).exec()
        .catch(err => console.log(`Item not in db: ${err}`));
    }));
  })
  .then(clientItems => {
    const items = _.flatten(clientItems);
    const strings = items.map(item => serialize(item._client, item._id, item.institution_type));
    appendToFile('tokenList.txt', strings.join('\n'));
  })
  .catch(console.error.bind(console));