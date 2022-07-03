function solution(city) {
  let bus = [];

  for (let i = 0; i < city.length; i++) {
    for (let j = 0; j < city[0].length; j++) {
      if (city[i][j] === 0) {
        bus.push([i, j]);
      }
    }
  }

  for (let i = 0; i < city.length; i++) {
    for (let j = 0; j < city[0].length; j++) {
      if (city[i][j] !== 0) {
        let num = 10000;
        for (let s = 0; s < bus.length; s++) {
          num = Math.min(
            num,
            Math.abs(i - bus[s][0]) + Math.abs(j - bus[s][1])
          );

          city[i][j] = num;
        }
      }
    }
  }

  return city;
}
