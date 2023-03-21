const caesar = function (str, num) {
  return str
    .split("")
    .map((letter) => {
      const charCode = letter.charCodeAt(0) + num;
      if (/\W/g.test(letter)) {
        return letter;
      } else {
        if (letter.charCodeAt(0) >= 97 && charCode >= 65 && charCode <= 90) {
          return String.fromCharCode(charCode + 26);
        } else {
          return (charCode >= 65 && charCode <= 90) ||
            (charCode >= 97 && charCode <= 122)
            ? String.fromCharCode(charCode)
            : charCode < 65 || (charCode > 122 && charCode <= 127)
            ? String.fromCharCode(charCode + 26)
            : charCode > 127
            ? String.fromCharCode(charCode - 78)
            : String.fromCharCode(charCode - 26);
        }
      }
    })
    .join("");
};
console.log("Hello, World!".charCodeAt(1) - 29);
console.log(caesar("Hello, World!", -29));
// Do not edit below this line
module.exports = caesar;
