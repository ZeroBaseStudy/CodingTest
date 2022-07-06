function solution(bj, one, two) {
    let tmp = [...bj];
    let sum = 0;
    while (one.length !== 0) {
        for (let i = 0; i < bj.length; i++) {
            let tmpindex = 0;
            tmpindex = one.indexOf(bj[i]);
            if (tmpindex === -1) continue;
            one.splice(tmpindex, 1);
            bj.splice(i, 1);
            sum++;
            break;
        }
    }
    while (two.length !== 0) {
        for (let i = 0; i < bj.length; i++) {
            let tmpindex = 0;
            tmpindex = two.indexOf(bj[i]);
            if (tmpindex === -1) continue;
            two.splice(tmpindex, 1);
            bj.splice(i, 1);
            sum += 2;
            break;
        }
    }
    sum = (sum + 3) * 150
    return `${sum}만원(${bj[0]})`
}
