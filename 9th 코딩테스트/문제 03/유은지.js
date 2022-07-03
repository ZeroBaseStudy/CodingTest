function solution(useageArr, fee) {
  return useageArr.map((i) => i * fee).reduce((a, b) => a + b);
}
