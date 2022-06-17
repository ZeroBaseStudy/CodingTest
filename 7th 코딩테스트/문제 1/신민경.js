function solution(num) {
    const sign = num < 0 ? -1 : 1

    num = Math.abs(num).toString().split('')
    num = sign * Number(num.reverse().join(''))

    if (Math.abs(num) >= 100000) return 0
    return num
}
