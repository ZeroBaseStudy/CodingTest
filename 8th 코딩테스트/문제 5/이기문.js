function solution(nums, n) {
  let answer;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === n) {
      answer = i;
      break;
    }
  }

  return answer >= 0 ? answer : -1;
}

console.log(solution([1, 3, 5, 3, 2], 3));
console.log(solution([2, 4, 2, 4, 2, 4, 4], 4));
console.log(solution([7, 7, 7, 6, 5, 10, 4, 4, 1, 8], 6));
console.log(solution([], 100));
console.log(solution([1, 3, 5, 3, 2], 99));
console.log(solution([1], 1));

