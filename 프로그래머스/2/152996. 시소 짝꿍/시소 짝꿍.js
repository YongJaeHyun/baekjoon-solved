function solution(weights) {
    let answer = 0;

    // Map: weight → 등장 횟수
    const count = new Map();

    for (let w of weights) {
        // 가능한 짝꿍 비율들
        const ratios = [1, 2 / 3, 3 / 2, 3 / 4, 4 / 3, 1 / 2, 2];

        for (let ratio of ratios) {
            const partner = w * ratio;
            if (count.has(partner)) {
                answer += count.get(partner);
            }
        }

        // 현재 w 기록
        count.set(w, (count.get(w) || 0) + 1);
    }

    return answer;
}
