const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (Array.isArray(arr)) {
      return (
        1 +
        (arr.length == 0
          ? 0
          : Math.max(...arr.map((el) => this.calculateDepth(el))))
      );
    } else {
      return 0;
    }
  }
};
