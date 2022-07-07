function solution(arr) {
  return arr.sort((a, b) => Math.abs(a) - Math.abs(b))[0];
}
