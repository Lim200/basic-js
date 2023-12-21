const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const newCols = matrix[0].length;
  const newRows = matrix.length;

  let neighborsArr = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  const isCellInsertMatrix = (rowMatrixOld, colMatrixOld) =>
    colMatrixOld < newCols &&
    rowMatrixOld < newRows &&
    colMatrixOld >= 0 &&
    rowMatrixOld >= 0;

  const resultMatrix = Array.from({ length: newRows }, () =>
    Array(newCols).fill(0)
  );

  for (let rowMatrixOld = 0; rowMatrixOld < newRows; rowMatrixOld++) {
    for (let colMatrixOld = 0; colMatrixOld < newCols; colMatrixOld++) {
      if (matrix[rowMatrixOld][colMatrixOld]) {
        for (const [moveX, moveY] of neighborsArr) {
          const newRow = rowMatrixOld + moveX;
          const newCol = colMatrixOld + moveY;

          if (isCellInsertMatrix(newRow, newCol)) {
            resultMatrix[newRow][newCol]++;
          }
        }
      }
    }
  }

  return resultMatrix;
}

module.exports = {
  minesweeper,
};
