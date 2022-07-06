function solution(n) {
  if (n < 0 || n > 1000000000) return n
  let sum = BigInt(0);
  let tmpnum = 2n;
  for (let i = 1; i <= n; i++) {
    if (i === 1) {
      sum += 1n;
    } else {
      sum += tmpnum;
      tmpnum = (tmpnum * 2n) % 1000000007n;
    }
    // console.log(sum);
  }
  return sum % 1000000007n;
}
