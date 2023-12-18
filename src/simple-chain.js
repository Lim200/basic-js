const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chainArr: [],
  getLength() {
    return this.chainArr.length;
  },
  addLink(value = ' ') {
    // if (this.chain.length === 0) {
    this.chainArr.push(`( ${value} )`);
    // } else {
    //   this.chainArr.push(`~~( ${value} )`);
    // }
    return this;
  },
  removeLink(position) {
    if (
      typeof position !== 'number' ||
      position > this.chainArr.length ||
      position < 1
    ) {
      this.chainArr = [];
      throw Error("You can't remove incorrect link!");
    } else {
      this.chainArr.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.chainArr.reverse();
    return this;
  },
  finishChain() {
    let result = this.chainArr.join('~~');
    this.chainArr = [];
    return result;
  },
};

module.exports = {
  chainMaker,
};
