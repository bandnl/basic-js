const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(date) {
  if (typeof date === 'string' && +date < 16 && +date > 0) {
    let a = +date;
    let a0 = MODERN_ACTIVITY;
    let t_half = HALF_LIFE_PERIOD;
    let k = 0.693 / t_half;
    let ratio = a0 / a;
    let lg = Math.log (ratio);
    let result = Math.ceil (lg / k);

    return result;
  } else return false;
}

module.exports = {
  dateSample
};
