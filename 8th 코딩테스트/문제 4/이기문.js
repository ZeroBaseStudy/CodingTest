function solution(n) {
  let max = 1;
  while (max ** 3 <= n) {
    max++;
  }
  return (max - 1) ** 3;
}

console.log(solution(99));
console.log(solution(1));
console.log(solution(100));
console.log(solution(1000000));
console.log(solution(100000000));
console.log(solution(87654321));
