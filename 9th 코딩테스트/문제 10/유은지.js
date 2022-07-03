function solution(array) {
    var answer = [];

    let curNum = 1;
    for (const num of array) {
        while(curNum !== num) {
            answer.push("In");
            answer.push("Out");
            curNum++;
        }
        answer.push("In");
        curNum++;
    }

    answer.push("End");

    return answer;
}
