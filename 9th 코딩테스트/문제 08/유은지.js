const DI = [0, 0, 1, -1];
const DJ = [1, -1, 0, 0];

function solution(array) {
    let answer = 0;

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[0].length; j++) {
            if (array[i][j] === "1") {
                array[i][j] = "0"
                dfs(i, j, array);
                answer++;
            }
        }
    }

    return answer;
}

function dfs(i, j, array) {

    for (let k = 0; k < 4; k++) {
        const nI = i + DI[k];
        const nJ = j + DJ[k];

        if (nI < 0 || nJ < 0 || nI > array.length - 1 || nJ > array[0].length - 1) continue;

        if (array[nI][nJ] === "0") continue;

        array[nI][nJ] = "0";
        dfs(nI, nJ, array);
    }
}
