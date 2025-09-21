function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    
    const visited = Array.from({ length: n }, () => Array(m).fill(false));
    visited[0][0] = true;
    
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];
    
    const queue = [[0, 0, 1]];
    while(queue.length > 0) {
        const [x, y, count] = queue.shift();
        if(x === n - 1 && y === m - 1) return count;
        
        for(let i = 0; i < 4; i++) {
            const newX = x + dx[i];
            const newY = y + dy[i];
            
            if(newX >= 0 && newX < n && newY >= 0 && newY < m && !visited[newX][newY] && maps[newX][newY] === 1) {
                visited[newX][newY] = true;
                queue.push([newX, newY, count + 1]);
            }
        }
    }
    
    return -1;
}
