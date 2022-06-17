function solution(arr) {
    let max = 0
    arr.forEach((sentence) => {
        max = Math.max(sentence.split(' ').length, max)
    })
    return max
}
