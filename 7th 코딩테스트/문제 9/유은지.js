function solution(l) {
  return sol(0, l.length - 1, l);
}

function sol(left, right, l) {
  if (left === right) return l[left];

  const mid = Math.floor((left + right) / 2);

  let ret = Math.max(sol(left, mid, l), sol(mid + 1, right, l));

  let low = mid;
  let high = mid + 1;
  let height = Math.min(l[low], l[high]);

  ret = Math.max(ret, height + 2);

  while (left < low || high < right) {
    if (high < right && (low === left || l[low - 1] < l[high + 1])) {
      high++;
      height = Math.min(height, l[high]);
    } else {
      low--;
      height = Math.min(height, l[low]);
    }
    //확장 후 사각형의 넓이
    ret = Math.max(ret, height * (high - low + 1));
  }
  return ret;
}
