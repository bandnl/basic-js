const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount(s1, s2) {
  let str1 = s1.split('');
  let str2 = s2.split('');
  let count = 0;
  for (let i of str1) {
    for (let j of str2) {
      if (i === j) {
          let str11 = str1.splice(str1.indexOf(i), 1);
          let str22 = str2.splice(str2.indexOf(j), 1);
          str1.unshift(' ');
          count++;
          break;
      }
    }
  }
return count;
}
getCommonCharacterCount('aabcc', 'adcaa')

module.exports = {
  getCommonCharacterCount
};
