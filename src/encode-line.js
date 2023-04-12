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
  let count = 1;
  let resStr = '';
  arr.forEach((v, i) => {
    if (v === arr[i + 1]) {
      count++;
    } else {
      if (count !== 1) {
        resStr += count + v;
      } else resStr += v;
      count = 1;
    }
  })
  return resStr;
}

module.exports = {
  encodeLine
};
