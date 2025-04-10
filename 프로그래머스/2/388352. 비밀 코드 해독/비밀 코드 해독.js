
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
function solution(n, q, ans) {
    let answer = 0;

    for(let a = 1; a <= n - 4; a++) {
        for(let b = a + 1; b <= n - 3; b++) {
            for(let c = b + 1; c <= n - 2; c++) {
                for(let d = c + 1; d <= n - 1; d++) {
                    for(let e = d + 1; e <= n; e++) {
                        const currSet = [a, b, c, d, e];
                        const currAnswer = [];

                        for(let i = 0; i < q.length; i++) {
                            const sameNumberCount = 10 - new Set([...currSet, ...q[i]]).size;
                            if(sameNumberCount === ans[i]) currAnswer.push(sameNumberCount);
                        }

                        if(JSON.stringify(currAnswer) === JSON.stringify(ans)) answer++;
                    }
                }
            }
        }
    }

    return answer;
}