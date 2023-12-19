const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(acceptsValue = true) {
    this.reverse = acceptsValue;
  }

  encrypt(str, key) {
    if (!str || !key) {
      throw Error('Incorrect arguments!');
    }
    const amountLetters = 26;
    str = str.toUpperCase();
    let indexNewStr = 0;
    const charACode = 'A'.charCodeAt(0);
    const doneCode = [];

    let lengthDifference = Math.ceil(str.length / key.length);
    const keyNew = key.repeat(lengthDifference).toUpperCase();

    let indexJ = 0;
    for (let i = 0; i < str.length; i++) {
      if (
        str.charCodeAt(i) < charACode ||
        str.charCodeAt(i) > charACode + amountLetters
      ) {
        doneCode.push(str[i]);
      } else {
        let indexCharStr = str.charCodeAt(i) - charACode;
        let shiftValue = keyNew.charCodeAt(indexJ) - charACode;
        indexNewStr = charACode + ((indexCharStr + shiftValue) % amountLetters);

        doneCode.push(String.fromCharCode(indexNewStr));
        indexJ++;
      }
    }
    if (this.reverse) {
      return doneCode.join('');
    } else {
      return doneCode.reverse().join('');
    }
  }
  decrypt(str, key) {
    if (!str || !key) {
      throw Error('Incorrect arguments!');
    }
    const amountLetters = 26;
    str = str.toUpperCase();
    let indexNewStr = 0;
    const charACode = 'A'.charCodeAt(0);
    const doneCode = [];

    let lengthDifference = Math.ceil(str.length / key.length);
    const keyNew = key.repeat(lengthDifference).toUpperCase();

    let indexJ = 0;
    for (let i = 0; i < str.length; i++) {
      if (
        str.charCodeAt(i) < charACode ||
        str.charCodeAt(i) > charACode + amountLetters
      ) {
        doneCode.push(str[i]);
      } else {
        let indexCharStr = str.charCodeAt(i) - charACode;
        let shiftValue = keyNew.charCodeAt(indexJ) - charACode;
        indexNewStr =
          charACode +
          ((indexCharStr - shiftValue + amountLetters) % amountLetters);

        doneCode.push(String.fromCharCode(indexNewStr));
        indexJ++;
      }
    }
    if (this.reverse) {
      return doneCode.join('');
    } else {
      return doneCode.reverse().join('');
    }
  }
}

module.exports = {
  VigenereCipheringMachine,
};
