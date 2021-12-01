const readFileValues = require('./utils');

const previousMeasurement = () => {
  const data = readFileValues('./data.txt');
  let count = 0;
  for (let i = 1; i < data.length; i++) {
    if (data[i] > data[i - 1]) {
      count++;
    }
  }
  return count;
};

console.log(previousMeasurement());
