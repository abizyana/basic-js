const CustomError = require("../extensions/custom-error");

const chainMaker = {
  array: [],
  getLength() {
    return array.length;
  },
  addLink(value) {
    if (value == undefined && value != null && value != NaN) {
      this.array.push(" ");
    } else {
      this.array.push("" + value);
    }
    return this;
  },
  removeLink(position) {
    if (
      !Number.isInteger(position) ||
      position <= 0 ||
      position >= this.array.length
    ) {
      this.array = [];
      throw new Error("position incorrect");
    }
    array = this.array.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    array = this.array.reverse();
    return this;
  },
  finishChain() {
    let chain = this.array.map((el) => "( " + el + " )");
    this.array = [];
    return chain.join("~~");
  },
};

module.exports = chainMaker;
