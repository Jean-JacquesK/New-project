// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverseStr(str) {
  //   const splitString = str.split("");
  //   const reverseArray = splitString.reverse();
  //   const joinArray = reverseArray.join("");

  //   return joinArray;

  return str.split("").reverse().join("");
}

console.log(reverseStr("apple"));
console.log(reverseStr("hello"));
console.log(reverseStr("Greetings!"));
