function solution(bj, one, two) {
    for (const o of one) {
        bj.splice(bj.indexOf(o), 1);
    }

    for (const t of two) {
        bj.splice(bj.indexOf(t), 1);
    }

    const winner = bj[0];
    const cost = one.length * 150 + two.length * 300 + 450;

    return `${cost}만원(${winner})`
}
