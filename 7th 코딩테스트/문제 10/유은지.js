function solution(arr, n) {
  if (arr.length === 1) return arr[0] + 1;

  let hospital = new Array(n).fill(0);
  arr.reverse(); // 큐에서 팝하기 쉽게하려고

  let tick = 0; //시간

  while (arr.length) {
    // 1. 환자 입장
    for (let i = 0; i < hospital.length; i++) {
      if (hospital[i] === 0) {
        hospital[i] = arr.pop() + 1;
      }
    }
    // 2. 치료
    for (let i = 0; i < hospital.length; i++) {
      if (hospital[i] > 0) hospital[i] -= 1;
    }
    tick++;
  }

  tick += Math.max(...hospital); //남아 있는 환자 중 최대 시간 구해서 넣기
  return tick;
}
