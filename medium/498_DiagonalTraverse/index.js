/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function(matrix) {
  if (matrix.length === 0){
    return []
  }
  let resultArray = []
  let row = matrix.length
  let col = matrix[0].length
  let rowIndex = 0,colIndex = 0;
  for (let i = 0;i<row*col;i++){
    resultArray.push(matrix[rowIndex][colIndex])
    if ((rowIndex+colIndex)%2 === 0){
      if (colIndex === (col - 1)) {
        // 往下移动一格准备向下遍历
        rowIndex++;
      } else if (rowIndex === 0){
        // 往右移动一格准备向下遍历
        colIndex++;
      } else {
        // 往上移动
        rowIndex--;
        colIndex++;
      }
    }else {
      if (rowIndex === (row - 1)) {
        // 往右移动一格准备向上遍历
        colIndex++;
      } else if (colIndex === 0){
        // 往上移动一格准备向上遍历
        rowIndex++;
      } else {
        // 往下移动
        rowIndex++;
        colIndex--;
      }
    }
  }
  return resultArray
};

console.log(findDiagonalOrder([[1,2,3],[4,5,6]]))
