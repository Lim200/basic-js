const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const object = {};
  let itemsArr = [];

  for (let item of domains) {
    itemsArr = item.split('.').reverse();
    // console.log(itemsArr);
    let dnsName = '';
    for (let elem of itemsArr) {
      dnsName += '.' + elem;
      object[dnsName] = (object[dnsName] || 0) + 1;
    }
  }
  return object;
}

module.exports = {
  getDNSStats,
};
