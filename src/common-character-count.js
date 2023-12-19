const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;
  const objectS1 = {};
  const objectS2 = {};

  for (let item of s1) {
    objectS1[item] = (objectS1[item] || 0) + 1;
  }
  // console.log(objectS1);

  for (let item of s2) {
    objectS2[item] = (objectS2[item] || 0) + 1;
  }
  // console.log(objectS2);

  for (let item in objectS1) {
    if (objectS2[item]) {
      count += Math.min(objectS1[item], objectS2[item]);
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount,
};
