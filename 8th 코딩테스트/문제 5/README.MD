## 제로베이스 프론트엔드 스쿨\_SmallestSameIndex

### [문제 설명]

숫자 배열 nums와 숫자 n이 주어집니다. 이때 nums에서 n과 동일한 숫자 중 가장 작은 index를 반환하는 함수, solution을 완성해주세요.

### [제한 사항]

- nums 내에 n과 일치하는 숫자가 없다면 -1을 반환합니다.

### [입력 형식]

- nums는 1 이상 100 이하의 정수로 이루어진 길이가 100 이하의 배열입니다.
- n은 1 이상 100 이하의 정수입니다.

### [출력 형식]

- nums 내에 n과 일치하는 숫자 중 가장 작은 index를 반환합니다.

### [테스트 케이스]

console.log(solution([1, 3, 5, 3, 2], 3));
console.log(solution([2, 4, 2, 4, 2, 4, 4], 4));
console.log(solution([7, 7, 7, 6, 5, 10, 4, 4, 1, 8], 6));
console.log(solution([], 100));
console.log(solution([1, 3, 5, 3, 2], 99));
console.log(solution([1], 1));
