const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  let resultArr = '';
  let countChar = 1;
  for (let i = 1; i < arr.length; i++) {
    // console.log('resultArr', resultArr);
    // console.log('arr', i, '=', arr[i]);
    if (arr[i] === arr[i - 1]) {
      countChar++;
    } else {
      if (countChar <= 1) {
        resultArr += arr[i - 1];
        countChar = 1;
      } else {
        resultArr += countChar + arr[i - 1];
        countChar = 1;
      }
    }
    if (i === arr.length - 1) {
      if (countChar === 1) {
        resultArr += arr[i];
      } else {
        resultArr += countChar + arr[i];
      }
    }
  }

  // const object = {};
  // for (let item of arr) {
  //   object[item] = (object[item] || 0) + 1;
  // }
  // const entries = Object.entries(object);

  // const resultString = entries.reduce((acc, [key, value]) => {
  //   acc += `${value}${key}`;
  //   return acc;
  // }, '');

  return resultArr;
}

module.exports = {
  encodeLine,
};
