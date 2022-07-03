function solution(array, p) {
  let answer = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i].startsWith(p)) {
      answer++;
    }
  }
  return answer;
}
