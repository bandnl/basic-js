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
    if (value) {
      this.result.push(`( ${value} )`)
    } else this.result.push(`( )`);
    return this;
  },
  removeLink(position) {
    if (position > 0 && position <= (this.result.length) &&  Number.isInteger(position)) {
      let carbage = this.result.splice (position - 1, 1);
               return this;
    } else return Error("You can't remove incorrect link!")
  },
  reverseChain() {
    this.result.reverse ();
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
