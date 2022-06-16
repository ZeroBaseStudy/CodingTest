function solution(s) {
  return s
    .split(/\.|,|!|\?|\s+/)
    .filter((v) => v.length)
    .map((v) => v.split("").reverse().join(""));
}

