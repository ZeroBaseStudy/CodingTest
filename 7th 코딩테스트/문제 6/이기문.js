function solution(n) {
    let count =0;
    let reg = /1/g;
    for(let i =1; i<=n ; i++) {
        let tmp = i.toString(2).match(reg);
        count += tmp.length
    }
    return count;
}
