/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let mIndex = 0,nIndex = 0
  while ((mIndex < (m+nIndex))&&nIndex < n){
    debugger
    if (nums1[mIndex]<=nums2[nIndex]){
      mIndex++
    } else {
      nums1.splice(mIndex,0,nums2[nIndex])
      nIndex++
      mIndex++
    }
  }
  if (mIndex === (m+nIndex)){
    for (let i = mIndex;i<m+n;i++){
      nums1[i] = nums2[i-m]
    }
  }
  nums1.splice(m+n,nums1.length)
  console.log(nums1)
};

let num1 = [1,2,3,0,0,0]
let num2 = [2,5,6]
merge(num1,3,num2,3)

