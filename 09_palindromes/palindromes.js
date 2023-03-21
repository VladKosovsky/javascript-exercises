const palindromes = function (str) {
  const newStr = str
    .match(/[a-zA-Z]+/g)
    .join("")
    .toLowerCase();
  const reversedStr = newStr.split("").reverse().join("");
  if (newStr === reversedStr) {
    return true;
  } else {
    return false;
  }
};

console.log(palindromes("tacos"));

// Do not edit below this line
module.exports = palindromes;
