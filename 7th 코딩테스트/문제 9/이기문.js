function solution(arr) {
    let nextMinNumberToRight = [];
    let nextMinNumberToLeft = [];
    let result = 0



    //find nextMinNumberToRight
    let stack = [0];
    let i=1;
    while(i<arr.length){
        while(stack && arr[stack[stack.length-1]] > arr[i] ){
            nextMinNumberToRight[stack.pop()] = i
        }
        stack.push(i)
        i++;
    }
    for(let i of stack){
        nextMinNumberToRight[i] = arr.length
    }

    // find nextMinNumberToLeft
    stack = [arr.length-1]
    i= arr.length -2
    while(i>=0){
        while(stack && arr[stack[stack.length-1]] > arr[i] ){
            nextMinNumberToLeft[stack.pop()] = i+1
        }
        stack.push(i)
        i--;
    }
    for(let i of stack){
        nextMinNumberToLeft[i] = 0
    }



    // final result righ-left*arr[i]
    for(let i=0; i<arr.length; i++){
     result = Math.max(result , (nextMinNumberToRight[i] - nextMinNumberToLeft[i])*arr[i] )   
    }
    return result
}
