function solution(n) {
  let node = 1;
  for (let i = 0; i < n; i++) {
    node = (node * 2)  % 1000000007
  }
  return node -1
}
