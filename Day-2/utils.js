const fs = require('fs');

module.exports = function inputValues(filename) {
  try {
    const data = fs.readFileSync(filename, 'utf8');
    return data.split('\n').map((input) => {
      const position = input.split(' ')[0];
      const depth = Number(input.split(' ')[1]);
      return {
        position,
        depth,
      };
    });
  } catch (error) {
    throw new Error(error);
  }
};
