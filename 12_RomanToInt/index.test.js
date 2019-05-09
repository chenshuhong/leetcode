/**
 * @Author: 陈树鸿
 * @Date: 2019-05-08
 */
let moduleObject = require('./index.js')

test('test',()=>{
  expect(moduleObject.sum1([2,4,6,9],8)).toEqual([0,2])
  expect(moduleObject.sum2([2,4,6,9],8)).toEqual([0,2])
})
