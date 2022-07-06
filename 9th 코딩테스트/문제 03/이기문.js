function solution(useageArr, fee) {
  let sum = 0;
  for (let i = 0; i < useageArr.length; i++) {
    useageArr[i] *= fee;
    sum += useageArr[i];
  }
  return sum
}