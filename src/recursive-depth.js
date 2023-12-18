const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr, deep = 0) {
    // console.log('deep', deep);
    if (Array.isArray(arr)) {
      deep =
        1 +
        arr.reduce(
          (deepNew, element) => Math.max(this.calculateDepth(element), deepNew),
          0
        );
    }
    return deep;
  }
}

module.exports = {
  DepthCalculator,
};
