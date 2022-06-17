function solution(n) {
    let answer = 0

    for(let i = 1 ; i < n / 2; i++){
        let tmp = 0
        for(let j = i; j < n + 1; j++){
            tmp += j
            if(tmp == n){
                answer += 1
            } 
            else if (tmp > n) break;
        }        
    }
    return answer + 1
}
