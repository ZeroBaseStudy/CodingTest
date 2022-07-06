function solution(array) {
    var answer = [];
    let count = 1;
    let tmparr = [];
    let i = 0;
    while (count <= 100) {
        if (array.length === tmparr.length) {
            answer.push('End');
            break;
        }
        answer.push('In');
        if (array[i] === count) {
            tmparr.push(count);
            i++;
        } else if (array[i] !== count) {
            answer.push('Out');
        }
        // console.log(array.length)
        count++;
    }
    return answer;
}