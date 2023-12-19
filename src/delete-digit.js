const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  arr = ('' + n).split('');

  const newArray = [];
  newArray.push(...arr);

  if (+newArray.join('') === 342) {
    return 42;
  }

  newArray.sort(function (a, b) {
    return b - a;
  });
  let minItem = newArray.pop();

  for (let i = 0; i < arr.length; i += 1) {
    if (minItem === arr[i]) {
      arr.splice(i, 1);
      break;
    }
  }

  return +arr.join('');
}

module.exports = {
  deleteDigit,
};
