/*
  202 编写一个算法来判断一个数 n 是不是快乐数。
  「快乐数」：对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和，
      然后重复这个过程直到这个数变为1，也可能是无限循环但始终变不到1。
      如果可以变为1，那么这个数就是快乐数。
*/

function happyNum(n) {
  const happy = 0;
  while(happy !== 0) {
    
  }
}
function spliceNum(n) {
  const result = [];
  while (n > 0) {
    result.push(n % 10);
    n = Math.floor(n / 10);
  }
  return result;
}
