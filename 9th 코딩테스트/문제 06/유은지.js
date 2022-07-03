function solution(area) {
    if(area ===1 ) return [1,1]
    const list = []
    let answer;
    let min = area;

    for (let i = 1; i <= area / 2; i++) {
        if (area % i === 0) {
            list.push([i, area / i]);
        }
    }

    for (const listElement of list) {
        if (min > listElement[1] - listElement[0] && listElement[1] - listElement[0] >= 0) {
            min = listElement[1] - listElement[0];
            answer = listElement;
        }
    }

    return answer
}
