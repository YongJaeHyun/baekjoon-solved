function solution(n, q, ans) {
    let answer = 0;
    const combinations = [];

    // 미리 조건들을 bitmask로 변환
    const conditionMasks = q.map(arr => {
        let mask = 0;
        for (let num of arr) {
            mask |= (1 << (num - 1));
        }
        return mask;
    });

    // 가능한 모든 5개 숫자 조합을 비트마스크로 생성
    const generate = (start, depth, mask) => {
        if (depth === 5) {
            combinations.push(mask);
            return;
        }
        for (let i = start; i <= n; i++) {
            if ((mask & (1 << (i - 1))) === 0) {
                generate(i + 1, depth + 1, mask | (1 << (i - 1)));
            }
        }
    };
    generate(1, 0, 0);

    // 각 조합마다 조건 확인
    for (let mask of combinations) {
        let valid = true;
        for (let i = 0; i < q.length; i++) {
            const commonBits = mask & conditionMasks[i];
            const bitCount = countBits(commonBits);
            if (bitCount !== ans[i]) {
                valid = false;
                break;
            }
        }
        if (valid) answer++;
    }

    return answer;
}

// 비트 1의 개수를 세는 함수 (Brian Kernighan’s algorithm)
function countBits(x) {
    let count = 0;
    while (x) {
        x &= (x - 1);
        count++;
    }
    return count;
}
