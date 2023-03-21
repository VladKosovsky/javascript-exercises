const removeFromArray = function (arr, ...args) {
  return arr.filter((number) => !args.includes(number));
};

// Do not edit below this line
module.exports = removeFromArray;
