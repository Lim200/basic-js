const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }

  if (!Date.parse(date)) throw Error('Invalid date!');
  if (Object.getOwnPropertyNames(date).length !== 0)
    throw Error('Invalid date!');

  let month = date.getMonth() + 1;
  if ((month > 0 && month <= 2) || month === 12) {
    return 'winter';
  }
  if (month >= 3 && month <= 5) {
    return 'spring';
  }
  if (month >= 6 && month <= 8) {
    return 'summer';
  }
  if (month >= 9 && month <= 11) {
    return 'autumn (fall)';
  }
}

module.exports = {
  getSeason,
};
