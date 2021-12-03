const getFileValues = require('./utils');

const calculatePosition = (inputValues) => {
  let horizontalPosition = 0;
  let depth = 0;
  inputValues.map((input) => {
    switch (input.position) {
      case 'forward':
        horizontalPosition += input.depth;
        break;
      case 'down':
        depth += input.depth;
        break;
      case 'up':
        depth -= input.depth;
        break;
    }
  });
  return horizontalPosition * depth;
};

console.log(calculatePosition(getFileValues('input.txt')));

const calculatePositionAim = (inputValues) => {
  let horizontalPosition = 0;
  let depth = 0;
  let aim = 0;
  inputValues.map((input) => {
    switch (input.position) {
      case 'forward':
        horizontalPosition += input.depth;
        depth += aim * input.depth;
        break;
      case 'down':
        aim += input.depth;
        break;
      case 'up':
        aim -= input.depth;
        break;
      default:
        break;
    }
  });
  return horizontalPosition * depth;
};

console.log(calculatePositionAim(getFileValues('input.txt')));
