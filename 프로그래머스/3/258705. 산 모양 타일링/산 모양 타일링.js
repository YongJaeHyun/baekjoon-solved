function solution(n, tops) {
    const dp = Array(n + 1).fill(1);
    const dp2 = Array(n + 1).fill(1);
    
    dp[0] = tops[0] ? 3 : 2;
    dp2[0] = 1;
    for(let i = 1; i < n; i++) {
        if(tops[i]){
            dp[i] = (dp[i - 1] * 3 + dp2[i - 1] * 2) % 10007
        } else {
            dp[i] = (dp[i - 1] * 2 + dp2[i - 1]) % 10007
        }
        dp2[i] = (dp[i - 1] + dp2[i - 1]) % 10007
    }

    return (dp[n - 1] + dp2[n - 1]) % 10007;
}
