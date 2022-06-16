/*
이중 for문 돌려서 계속 더한다음에 n과 같으면 answer에 1더해주고 break
결과가 n보다 클때도 break
*/
function solution(n) {
  let answer = 1;

  for (let i = 1; i < n / 2 + 1; i++) {
    let result = i;
    for (let j = i + 1; j < n; j++) {
      result += j;
      if (result === n) {
        answer++;
        break;
      } else if (result > n) break;
    }
  }

  return answer;
}
