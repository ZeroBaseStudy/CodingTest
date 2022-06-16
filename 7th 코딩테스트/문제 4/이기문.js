function solution(n) {
    let answer = 0;
    let cnt = 1; // 수열의 크기
    n--;
    while (n > 0) {
        cnt++;
        n = n - cnt;
        if (n % cnt == 0) {
            answer++;
        }
    }
    return answer+1;
}
