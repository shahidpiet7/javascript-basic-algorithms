// In a string replace a character with another

function replaceChar(str, thisChar, withChar) {
  const n = str.length;
  let result = [];

  for (let i = 0; i < n; i++) {
    if (str[i] === thisChar) {
      result.push(withChar);
    } else {
      result.push(str[i]);
    }
  }
  return result.join("");
}

const str = "Shahid";
const thisChar = "h";
const withChar = "v";
const resultStr = replaceChar(str, thisChar, withChar);
console.group("--//In a String replace a character with another");
console.log("str:", str);
console.log("resultStr:", resultStr);
console.groupEnd();
