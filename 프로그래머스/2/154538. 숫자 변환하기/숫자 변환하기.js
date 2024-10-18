// BFS 시도 - 시간 초과로 실패
// DP로 성공
function solution(x, y, n) {
    const dp = Array(y + 1).fill(Infinity);
    dp[x] = 0; // 처음 숫자는 무조건 0번으로 성공

    for (let i = x; i <= y; i++) {
        if (dp[i] === Infinity) continue; // 아직 도달하지 못한 숫자는 건너뜀

        // 3가지 연산을 각각 수행하여 dp 값을 갱신
        if (i * 3 <= y) {
            dp[i * 3] = Math.min(dp[i * 3], dp[i] + 1);
        }
        if (i * 2 <= y) {
            dp[i * 2] = Math.min(dp[i * 2], dp[i] + 1);
        }
        if (i + n <= y) {
            dp[i + n] = Math.min(dp[i + n], dp[i] + 1);
        }
    }

    // 목표 숫자 y에 도달할 수 없으면 -1 반환
    return dp[y] === Infinity ? -1 : dp[y];
}
