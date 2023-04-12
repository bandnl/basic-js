const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  const additArr = String(options.addition) !== 'undefined' ? Array.from(new Array(options.additionRepeatTimes || 1), () => String(options.addition)) : [];
  const additStr = additArr.join(options.additionSeparator || '|');
  const mainArr = Array.from(new Array(options.repeatTimes || 1), () => String(str));
  return mainArr.map( mainVal => mainVal + additStr ).join(options.separator || '+')
}

module.exports = {
  repeater
};
