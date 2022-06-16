function solution(arr) {
  return arr
    .map((v) => v.split(" ").length)
    .reduce((v1, v2) => Math.max(v1, v2));
}
