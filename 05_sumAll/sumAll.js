const sumAll = function (num_1, num_2) {
  let sum = 0;
  if (!Number.isInteger(num_1) || !Number.isInteger(num_2)) return "ERROR";
  if (num_1 < 0 || num_2 < 0) return "ERROR";
  if (num_1 > num_2) {
    for (let i = num_2; i < num_1 + 1; i++) {
      sum += i;
    }
  } else {
    for (let i = num_1; i < num_2 + 1; i++) {
      sum += i;
    }
  }
  return sum;
};

console.log(sumAll(1, 4));

// Do not edit below this line
module.exports = sumAll;
