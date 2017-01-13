import fs from 'fs';

const appendToFile = (filename, line) => {
  fs.appendFileSync(filename, `${line}\n`, (err) => {
    if (err) {
      throw err;
    }
  });
};

export default appendToFile;