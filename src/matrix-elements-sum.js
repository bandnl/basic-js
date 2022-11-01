const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let copy;
  let arr_cop = [];
  let sum = 0;

  for (let i=0; i<matrix.length; i++) {
    copy = [];
    for (let j=0; j<matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        copy.push(j)
      }
      if (!arr_cop.includes(j)) {
        sum += matrix[i][j]
      }
    }
    arr_cop = copy.slice(0);
  }
  return sum;
}

module.exports = {
  getMatrixElementsSum
};
