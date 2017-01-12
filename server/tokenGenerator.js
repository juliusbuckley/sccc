import fs from 'fs';

const tokenGenerator = n => {
  fs.writeFile('tokenList.txt', '', err => {
    if (err) {
      throw err;
    }
    console.log('tokenList created!');
    for (let i = 0; i <= n; i++) {
      fs.appendFile('tokenList.txt', `access_token_${i}\n`, (err) => {
        if (err) {
          throw err;
        }
        console.log(`access_token_${i} saved!`);
      });
    }
  });
};

export default tokenGenerator;