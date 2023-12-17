const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let result = [];
  if (!members) return false;
  for (let k = 0; k <= members.length - 1; k += 1) {
    if (typeof members[k] === 'string') {
      let countItem = 0;
      // console.log(element);
      let elementNew = members[k]
        .replace(/ /g, '')
        .replace(/[^A-zА-яЁё]/, '')
        .toUpperCase();
      // console.log(elementNew);
      for (let i = 0; i <= elementNew.length - 1; i += 1) {
        if (
          // elementNew[i] === elementNew[i].toUpperCase() &&
          elementNew[i] !== ''
        ) {
          countItem += 1;
          result.push(elementNew[i]);
        }
        if (countItem === 1) {
          countItem = 0;
          break;
        }
        if (countItem === 0 && i === elementNew.length - 1) {
          result.push(elementNew[0]);
        }
      }
    }
  }
  if (result.length > 0) {
    return result.sort().join('');
  } else {
    return false;
  }
}

module.exports = {
  createDreamTeam,
};
