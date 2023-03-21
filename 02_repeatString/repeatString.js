const repeatString = function (str, num) {
  let str2 = "";
  for (i = 0; i < num; i++) {
    str2 += str;
  }
  if (num < 0) {
    return "ERROR";
  } else {
    return str2;
  }
};

// Do not edit below this line
module.exports = repeatString;
