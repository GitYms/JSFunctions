// 根据size分割arr,并返回数组
function chunk(arr, size) {
  if(size === 0) return arr;
  const result = [];
  const resultLength = Math.ceil(arr.length / size);
  for(let i = 0; i < resultLength; i ++) {
    result[i] = arr.slice(size * i, size * i + size);
  }
  return result;
}