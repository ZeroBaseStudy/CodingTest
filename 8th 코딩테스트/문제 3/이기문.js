function solution(arr) {
  arr.sort((a, b) => b - a);
  const n = arr.length - 2;
  for (let i = 0; i < n; i++) {
    if (arr[i] < arr[i + 1] + arr[i + 2]) return arr[i] + arr[i + 1] + arr[i + 2];
  }
  return 0;
}

console.log(solution([3, 2, 3]));
console.log(solution([2, 1, 1]));
console.log(solution([1000000, 500000, 500000]));
console.log(solution([66, 81, 28, 18, 22, 9, 36, 99, 84, 45]));
console.log(solution([427, 393, 71, 886, 36, 102, 77, 924, 409, 496, 477, 788, 491, 561, 106, 12, 310, 609, 399, 49]));
console.log(solution([317809, 507715, 903456, 868864, 334083, 462684, 546480, 405684, 360852, 721044]));