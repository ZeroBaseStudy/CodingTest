function solution(field, n) {
    let r = field.length
    let c = field[0].length

    const countPlant = (x, y) => {
        let count = 0
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (x + i >= r || y + j >= c) return 0;
                if (field[x + i][y + j]) count++
            }
        }
        return count
    }
    let max = 0;
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            max = Math.max(countPlant(i, j), max)
        }
    }
    return max
}
