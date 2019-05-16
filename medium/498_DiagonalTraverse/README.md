Given a matrix of M x N elements (M rows, N columns), return all elements of the matrix in diagonal order as shown in the below image.

>  给定一个含有 M x N 个元素的矩阵（M 行，N 列），请以对角线遍历的顺序返回这个矩阵中的所有元素，对角线遍历如下图所示。

**Example:**

```
Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]

Output:  [1,2,4,7,5,3,6,8,9]

Explanation:
```

 ![](https://assets.leetcode.com/uploads/2018/10/12/diagonal_traverse.png)

**Note:**

The total number of elements of the given matrix will not exceed 10,000.

遍历时有这个规则，斜向上的坐标和是偶数，斜向下的坐标和是奇数

```js
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
```

