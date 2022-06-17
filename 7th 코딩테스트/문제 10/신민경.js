function solution(arr, n) {
    let total = 0
    let room = Array(n).fill(0)

    while (arr.length > 0) {
        for (let i = 0; i < room.length; i++) {
            if (!room[i]) room[i] = arr.shift();
            else room[i]--;
        }
        total ++
    }
    // 남은 환자 처리
    let flag = false
    for (let i = 0; i < room.length; i++) {
        if (room[i] > 0) {
            room[i]--
            flag = true
        }
    }

    while (flag) {
        flag = false
        for (let i = 0; i < room.length; i++) {
            if (room[i] > 0) {
                room[i]--
                flag = true
            }
        }
        total++
    }

    return total
}
