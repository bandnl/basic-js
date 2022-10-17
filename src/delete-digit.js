const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let length = n.toString();
  let arr = length.split('');
  let arr_int = [];
  let result = 0;

  for (let key = 0; key < arr.length; key++) {
    let arr1 = arr.slice(0);
    let carbage = arr1.splice(key, 1);
    let arr_mod = arr1.join('');
    arr_int.push(+arr_mod)
  }
  arr_int = arr_int.sort((a, b) => a-b);
  result = arr_int.pop();
  return result;
}

module.exports = {
  deleteDigit
};
