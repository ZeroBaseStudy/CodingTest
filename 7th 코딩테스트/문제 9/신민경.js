function solution(l) {
  let max = 0
  for (let i = 0; i < l.length; i++) {
      let base = l[i]
      let arr = [l[i]]

      for (let j = i + 1; j < l.length; j++) {
          if (l[j] < base) break;
          arr.push(l[j])
      }
      for (let j = i - 1; j >= 0; j--) {
          if (l[j] < base) break;
          arr.push(l[j])
      }

      let area = arr.length * base
      if (area > max) {
        max = area
      }
  }

  return max
}
