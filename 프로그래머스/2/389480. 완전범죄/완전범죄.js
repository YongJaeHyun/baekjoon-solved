function solution(info, n, m) {
    const dp = Array.from({ length: info.length + 1 }, () => new Set());
    dp[0].add("0,0");
    
    for(let i = 1; i < dp.length; i++) {
        for(let prevInfo of dp[i - 1]) {
            const [prevAInfo, prevBInfo] = prevInfo.split(",").map(Number);
            const [aInfo, bInfo] = info[i - 1];
            if(prevAInfo + aInfo < n) {
                dp[i].add(`${prevAInfo + aInfo},${prevBInfo}`);
            } 
            if(prevBInfo + bInfo < m) {
                dp[i].add(`${prevAInfo},${prevBInfo + bInfo}`);
            }
        }
    }
    
    const lastAInfo = Array.from(dp.at(-1)).map((info) => info.split(",").map(Number));
    const result = Math.min(...lastAInfo.map(([ aInfo ]) => aInfo));
    return result === Infinity ? -1 : result;
}