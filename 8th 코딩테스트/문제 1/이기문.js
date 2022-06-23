function solution(fruits) {
  if (fruits.length === 1) return fruits
  let result = -999999;
  let i = 0;
  while (i < fruits.length) {
    let tmp = 0;
    for (let j = i; j < fruits.length; j++) {
      tmp += fruits[j];
      if (result < tmp) {
        result = tmp;
      }
    }
    i++
  }
  return result;
}

console.log(solution([-2, 5, -3, 6, 8, -1, -5, 3]));
console.log(solution([-1, -9, -9, -1, 3, 26, -9, 0, -3, 8, -9, 8, -6, 5]));
console.log(solution([-10, -9, -8, -7, -6, -4, -3, -2, -1]));
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(solution([-1000, 1000, -1000, 1000, -1000, 1000, -1000]));
console.log(solution([-1000, 2000, -3000, 4000, -5000, 4000, -3000, 2000, -1000]));