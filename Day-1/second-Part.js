const readFileValues = require('./utils');

const sumThreeMeasurement = () => {
  const data = readFileValues('./data.txt');
  let count = 0;

  for (let i = 3; i < data.length; i++) {
    const A = data[i - 1] + data[i - 2] + data[i - 3];
    const B = data[i] + data[i - 1] + data[i - 2];

    if (B > A) {
      count++;
    }
  }
  return count;
};

console.log(sumThreeMeasurement());
