const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const arrNumb = Array.from(Array(10), (v, i) => i);
  const arrLet = ['A', 'B', 'C', 'D', 'E', 'F'];
  const initArr = n.split('-');
  let res = true;
  initArr.forEach((v, i) => {
    for (let char of v) {
      if (!!(char / 2 || char == 0)) {
        if (!arrNumb.includes(+char)) res = false;
      } else {
        if (!arrLet.includes(char)) res = false;
      }
    }
  })
  return res;
}
module.exports = {
  isMAC48Address
};
