const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let arr = domains.map(val => val.split('.').reverse());
  let obj = {};
  arr.forEach(array => {
    let a = array.reduce((acc, cur) => {
      if (!obj.hasOwnProperty(`.${acc}`)) {
        obj[`.${acc}`] = 1;
      } else {
        obj[`.${acc}`] += 1;
      }
      return acc + '.' + cur;
    })
    if (!obj.hasOwnProperty(`.${a}`)) {
      obj[`.${a}`] = 1;
    } else {
      obj[`.${a}`] += 1;
    }
  })
  return obj
}

module.exports = {
  getDNSStats
};
