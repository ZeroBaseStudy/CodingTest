function solution(bridge, jumpSize) {
    const dp = new Array(bridge.length).fill(false);

    dp[0] = true;

    for (let i = 0; i < bridge.length; i++) {
        if (dp[i] === true) {
            for (let j = 1; j <= jumpSize + 1; j++) {
                if (bridge[i + j] === 1) {
                    dp[i + j] = true;
                }
            }
            if (dp[dp.length - 1]) return true;
        }
    }

    return dp[dp.length - 1];
}
