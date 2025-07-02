function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];

    const visited = Array.from({ length: n }, () => Array(m).fill(false));
    const queue = [[0, 0, 1]]; // (x, y, distance)

    visited[0][0] = true;

    while (queue.length > 0) {
        const [x, y, dist] = queue.shift();

        if (x === n - 1 && y === m - 1) return dist;

        for (let i = 0; i < 4; i++) {
            const newX = x + dx[i];
            const newY = y + dy[i];
            
            if(newX < 0 || newX >= n || newY < 0 || newY >= m || maps[newX][newY] === 0 || visited[newX][newY]) continue;
            
            visited[newX][newY] = true;
            queue.push([newX, newY, dist + 1]);
        }
    }

    return -1;
}
