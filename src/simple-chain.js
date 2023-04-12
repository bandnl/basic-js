const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  result: [],
  getLength() {
    return this.result.length;
  },
  addLink(value) {
    if (value !== undefined) {
      this.result.push(`( ${value} )`)
    } else this.result.push(`( )`);
    return this;
  },
  removeLink(position) {
    if (typeof position === 'number' && Number.isInteger(position) && position > 0 && position <= (this.result.length)) {
      let carbage = this.result.splice (position - 1, 1);
      return this;
    } else {
      this.result = [];
      throw new Error("You can't remove incorrect link!")
    }
  },
  reverseChain() {
    this.result.reverse();
    return this;
  },
  finishChain() {
    let output =  this.result.slice(0);
    this.result = [];
    return output.join('~~');
  }
}

module.exports = {
  chainMaker
};
