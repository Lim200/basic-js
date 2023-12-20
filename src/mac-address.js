const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let arr = n.split('-');
  let arrNew;
  let flag = false;
  if (arr.length === 6) {
    arrNew = arr.join('').split('');
    for (let i = 0; i < arrNew.length; i++) {
      if (
        (+arrNew[i] >= 0 && +arrNew[i] <= 9) ||
        arrNew[i] === 'A' ||
        arrNew[i] === 'B' ||
        arrNew[i] === 'C' ||
        arrNew[i] === 'D' ||
        arrNew[i] === 'E' ||
        arrNew[i] === 'F'
      ) {
        flag = true;
      } else {
        flag = false;
        break;
      }
    }
  }
  return flag;
}

module.exports = {
  isMAC48Address,
};
