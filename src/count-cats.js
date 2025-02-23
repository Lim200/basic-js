const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let sum = 0;
  for (let i = 0; i <= matrix.length - 1; i += 1) {
    for (let k = 0; k <= matrix[i].length - 1; k += 1) {
      if (matrix[i][k] === '^^') {
        sum += 1;
      }
    }
  }
  return sum;
}

module.exports = {
  countCats,
};
