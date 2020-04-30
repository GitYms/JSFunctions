/*
  输入：长度为n的数组里面的所有数字都在0~n-1范围内
  输出：任一一个重复的数字
  用例：长度为7的数组[2, 3, 1, 0, 2, 5, 3] => 2 或者3
*/
// 时间O(n) 空间：O(1)
function getOneDuplication(arr) {
  const n = arr.length - 1;
  if (n <= 0) return false;

  for(let i = 0; i < n; i++) {
    if(arr[i] > n) return false;
    while(arr[i] !== i) {
      if(arr[i] == arr[arr[i]]) {
        return arr[i];
      }
      const temp = arr[i];
      arr[i] = arr[temp];
      arr[temp] = temp;
    } 
  }
  return false;
}
const test = [1, 0, 6];
console.log(getOneDuplication(test))
