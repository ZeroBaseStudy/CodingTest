function solution(array) {

    const set = new Set();

    for (let i = 0; i < array.length; i++) {
        const num = array[i];
        if (num % 2 === 1) {
            for (let j = 0; j < array.length; j++) {
                if (i === j) continue;

                set.add(10 * array[j] + num);
            }
        }
    }

    return set.size;
}
