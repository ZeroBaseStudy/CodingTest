function solution(s) {
    const result = new Array(10).fill(0).map(() => new Array(2).fill(0))

    for (let i = 0; i < 10; i++) {
        result[i][0] = i
    }

    s.split('').forEach((num) => {
        result[Number(num)][1]++
    })

    result.sort((x, y) => {
        return y[1] - x[1]
    })

    let answer = ""
    result.forEach((num) => {
        answer += num[0]
    })
    return answer.split('').join(' ')
}
