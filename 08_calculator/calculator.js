const add = function (num_1, num_2) {
  const add = num_1 + num_2;
  return add;
};

const subtract = function (num_1, num_2) {
  const sub = num_1 - num_2;
  return sub;
};

const sum = function (arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    const sumOfArray = arr.reduce((value_1, value_2) => value_1 + value_2);
    return sumOfArray;
  }
};

const multiply = function (arr) {
  const mult = arr.reduce((value_1, value_2) => value_1 * value_2);
  return mult;
};

const power = (num_1, num_2) => Math.pow(num_1, num_2);

const factorial = function (num) {
  let result = 1;
  for (let i = num; i > 1; i--) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
