function solution(arr) {
    let max = 0;
    for(let i=0; i<arr.length; i++) {
        let tmp = arr[i].split(' ');
        if(max < tmp.length) {
            max = tmp.length;
        }
    }
    return max;
}
