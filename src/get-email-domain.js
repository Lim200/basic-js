const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let arr = email.split('@');
  // for (let i = 0; i < email.length; i++) {
  //   if (email[i] === '@') {
  //     result = email.split(email[i]);
  //   }
  // }
  return String(arr.pop());
}

module.exports = {
  getEmailDomain,
};
