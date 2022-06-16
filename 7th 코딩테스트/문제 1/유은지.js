function solution(num) {
  let a = String(num).split("");

  if (num < 0) { //음수 - 따로 빼서 처리
    a.shift();
    a.reverse().unshift("-");
    a = a.join("");
  } else { // 양수는 그대로 처리
    a = a.reverse().join("");
  }

  return Math.abs(a) > 100000 ? 0 : +a;
}
