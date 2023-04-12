const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  const speed = 3600 / turnsSpeed;
  let arr = [1];
  for (let i = 0; i < disksNumber - 1; i++) {
    arr.push(arr[i] * 2);
  }
  let turns = arr.reduce((ac, cur) => ac + cur);
  let sec = Math.floor(speed * turns);
  return {
    'turns': turns,
    'seconds': sec,
  }
}

module.exports = {
  calculateHanoi
};
