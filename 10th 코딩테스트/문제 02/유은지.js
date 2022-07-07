function solution(s) {
  let answer = [s[0]];
  s = s.split("");

  for (let i = 1; i < s.length; i++) {
    if (answer[answer.length - 1] === s[i]) {
      answer.pop();
    } else {
      answer.push(s[i]);
    }
  }

  return answer.join("");
}
