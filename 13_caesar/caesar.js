function caesar(phrase, shift) {
  return phrase
    .split("")
    .map((letter) => {
      const charCode = letter.charCodeAt();
      const basePosition = charCode < 97 ? 65 : 97;
      const shiftedCode =
        ((((charCode + shift - basePosition) % 26) + 26) % 26) + basePosition;
      if (/[\W]/g.test(letter)) {
        return letter;
      } else {
        return String.fromCharCode(shiftedCode);
      }
    })
    .join("");
}
console.log("Hello, World!".charCodeAt(1) - 29);
console.log(caesar("conquer et impera", 13));
// Do not edit below this line
module.exports = caesar;
