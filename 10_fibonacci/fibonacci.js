const fibonacci = function (member) {
  if (member === 0 || member < 0) {
    return "OOPS";
  }
  let x = 0;
  let y = 1;
  for (i = 1; i < member; i++) {
    const z = y;
    y = x + y;
    x = z;
  }
  return y;
};

// Do not edit below this line
module.exports = fibonacci;
