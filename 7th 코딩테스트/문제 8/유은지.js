/*
갈 수 있는 최대 좌표로 for문 돌려서 1값 많은 거 갱신해주기
*/
function solution(field, n) {
  let answer = 0;

  for (let i = 0; i < field.length - n + 1; i++) {
    for (let j = 0; j < field[0].length - n + 1; j++) {
      let result = 0;
      for (let k = 0; k < n; k++) {
        for (let l = 0; l < n; l++) {
          const nI = i + k;
          const nJ = j + l;
          result += field[nI][nJ];
        }
      }
      answer = Math.max(result, answer);
    }
  }

  return answer;
}
