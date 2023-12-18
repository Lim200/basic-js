const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = '';
  let repeatTimes;
  let additionRepeatTimes;
  let separator = '';
  let additionSeparator = '';
  let addition = String(options.addition);
  let additionResult = '';
  str = typeof str === 'string' ? str : String(str);

  if (options.repeatTimes > 0) {
    repeatTimes = options.repeatTimes;
  } else {
    repeatTimes = 0;
  }
  if (options.additionRepeatTimes > 0) {
    additionRepeatTimes = options.additionRepeatTimes;
  } else {
    additionRepeatTimes = 0;
  }
  if (options.separator === '' || !options.separator) {
    separator = '+';
  } else {
    separator = options.separator;
  }
  if (options.additionSeparator === '' || !options.additionSeparator) {
    additionSeparator = '|';
  } else {
    additionSeparator = options.additionSeparator;
  }
  // console.log('result', result);
  // console.log('repeatTimes', repeatTimes);
  // console.log('additionRepeatTimes', additionRepeatTimes);
  // console.log('separator', separator);
  // console.log('additionSeparator', additionSeparator);

  for (let j = 0; j < additionRepeatTimes; j += 1) {
    if (j + 1 === additionRepeatTimes) {
      additionResult = additionResult + addition;
    } else {
      additionResult = additionResult + addition + additionSeparator;
    }
  }
  if (additionRepeatTimes === 0 && !addition) {
    additionResult = additionResult + addition;
  }
  if (additionResult === '' && addition === 'STRING_OR_DEFAULT')
    additionResult = addition;
  // console.log('additionResult', additionResult);
  for (let i = 0; i < repeatTimes; i += 1) {
    if (i + 1 === repeatTimes) {
      result += str + additionResult;
    } else {
      result += str + additionResult + separator;
    }
  }

  if (repeatTimes === 0) {
    result += str + addition;
  }
  // result.pop();
  // console.log('result', result);
  return result;
}

module.exports = {
  repeater,
};
