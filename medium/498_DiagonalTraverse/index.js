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
  let rowIndex=0,colIndex = 0
  let direction = true //true表示斜向上，false表示斜向下
  while ((rowIndex+colIndex)<=(row+col)){
    if (rowIndex<row&&colIndex<col){
      resultArray.push(matrix[rowIndex][colIndex])
      console.log(rowIndex,colIndex)
    }
    if (rowIndex === 0 && direction ===true){
      direction=false
      colIndex++
    } else if (colIndex === 0 && direction === false){
      direction = true
      rowIndex++
    } else {
      if (direction){
        rowIndex--
        colIndex++
      }else {
        rowIndex++
        colIndex--
      }
    }
  }
  return resultArray
};

console.log(findDiagonalOrder([[1,2,3],[4,5,6],[7,8,9]]))
