const fs = require('fs');

module.exports = function readFileValues(filename) {
  try {
    const data = fs.readFileSync(filename, 'utf-8');
    return data.split('\n').map((value) => Number(value));
  } catch (error) {
    throw new Error(error);
  }
};
