function solution(n) {
  let answer = 0;

  for (let i = 0; i <= n; i++) {
    answer += i
      .toString(2)
      .split("")
      .filter((v) => v === "1").length;
  }

  return answer;
}
