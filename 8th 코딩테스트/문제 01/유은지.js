function solution(n) {
  let block = 0;
  for (let i = 1; i <= n; i++) {
    block += i;
  }
  return block;
}
