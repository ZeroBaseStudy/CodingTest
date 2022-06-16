function solution(s) {
  let map = new Map(); //map 만들어줌
  s = [...s]; // s는 배열형태로 만들기

  for (let i = 0; i < 10; i++) {
    let num = s.filter((v) => +v === i).length; //인덱스와 같은 애들 찾아서 length로 map에 넣어줌
    map.set(i, num); // (인덱스번호, 일치하는 숫자 갯수) 형태로 넣기
  }
  let arr = [...map].sort((a, b) => b[1] - a[1]); // num을 기준으로 sort
 
  return arr.map((v) => v[0]).join(" "); // sort된 순서대로 인덱스 번호 출력
}
