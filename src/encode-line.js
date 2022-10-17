const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  let arr = str.split('');
  let result = [];
  arr = arr.sort();
  let first;
  let last;
  let minus;

  for (let key = 0; key<arr.length; ++key) {
    first = arr.indexOf(arr[key]);
    last = arr.lastIndexOf(arr[key]);
    minus = last - first + 1;

    if (!first) {
      minus = last + 1;
    } 
    if (first === 1) {
      minus = last
    } 
    if (!minus) {
      minus = 1
    }
    if (minus != 1) {
      result.push(minus, arr[key])
    } else result.push(arr[key])
    
      key = last;
  }
  
  return result.join('')
}

module.exports = {
  encodeLine
};
