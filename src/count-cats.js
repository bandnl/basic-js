const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
 function countCats(arr) {
  let catArr = arr.flat (Infinity);
  let counter = 0;
  for (let i of catArr) {
    if (i === '^^') {
      counter++;
    } else continue;
  }
  return counter;
}

module.exports = {
  countCats
};
