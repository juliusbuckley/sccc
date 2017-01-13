import fs from 'fs';
import readline from 'readline';
import { deserialize } from './tokenFunctions';
import appendToFile from '../appendToFile';

const associatedItems = clientId => {
  let count = 1;
  const lineReader = readline.createInterface({
    input: fs.createReadStream('tokenList.txt')
  });
  lineReader.on('line', line => {
    const input = deserialize(line).split(',');
    let currentClientId = input[0];
    let currentItemId = input[1];
    if (currentClientId === clientId) {
      console.log(`item id ${count}: ${currentItemId}`);
      count++;
      appendToFile('itemId.txt', currentItemId);
    }
  });
};

associatedItems(process.env.CLIENT_ID);

export default associatedItems;