function solution(points, routes) {
    let answer = 0;
    const map = new Map();
    
    // 시작 시간에 충돌 체크
    let runners = routes.map(([startPointNum, ...endPointNums]) => {
        const startPoint = points[startPointNum - 1];
        const isCollide = map.has(startPointNum);
        map.set(startPointNum, isCollide ? map.get(startPointNum) + 1 : 1);
        return { position: [...startPoint], endPointNums };
    });
    
    // 충돌 수 세기
    answer += Array.from(map.values()).filter(value => value > 1).length;

    while (true) {
        const newMap = new Map();
        let isAllEnd = true;

        for (let runner of runners) {
            let { position, endPointNums } = runner;
            if (endPointNums.length === 0) continue;

            let [x, y] = position;
            const currentEndPointIdx = endPointNums[0] - 1;
            const [endX, endY] = points[currentEndPointIdx];

            if (x !== endX) {
                isAllEnd = false;
                x += (x < endX) ? 1 : -1;
            } else if (y !== endY) {
                isAllEnd = false;
                y += (y < endY) ? 1 : -1;
            }
            runner.position = [x, y]

            // 도착하면 경유지 제거
            if (x === endX && y === endY) {
                endPointNums.shift();
            }

            // 새로운 위치 체크
            const key = `${x},${y}`;
            newMap.set(key, (newMap.get(key) || 0) + 1);
        }

        // 충돌 수 세기
        answer += Array.from(newMap.values()).filter(value => value > 1).length;

        if (isAllEnd) return answer;
    }
}
