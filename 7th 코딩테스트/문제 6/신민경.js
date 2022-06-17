function solution(n) {
    let result = 0
    for (let i = 0; i <= n; i++) {
        let binary = i.toString(2)
        for (let j = 0; j < binary.length; j++) {
            if (binary[j] == '1') result++
        }
    }

    return result
}
