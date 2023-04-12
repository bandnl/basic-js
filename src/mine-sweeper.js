const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let arr = matrix.flat();
  let res = [];
  let cur = [];
  arr.forEach((v, ind) => {
    let count = 0;
    if (ind === Math.floor(arr.length / 2)) {
      for (let i = ind - 4; i <= ind + 4; i++) {
        if (i === ind) continue;
        if (arr[i]) count++;
      }
    } else {
      if ((ind + 1) % 3 === 0) {
        for (let i = ind - 4; i <= ind + 3; i++) {
          if ((i - ind) === 1 || i === ind || (ind - i) === 2) continue;
          if (arr[i]) count++;
        }
      } else if (ind % 3 === 0) {
        for (let i = ind - 3; i <= ind + 4; i++) {
          if ((ind - i) === 1 || i === ind || (i - ind) === 2) continue;
          if (arr[i]) count++;
        }
      } else {
        for (let i = ind - 4; i <= ind + 4; i++) {
          if (i === ind) continue;
          if (arr[i]) count++;
        }
      }
    }
    cur.push(count);
    if (cur.length === 3) {
      res.push(cur);
      cur = [];
    }
  })
  return res
}

module.exports = {
  minesweeper
};
