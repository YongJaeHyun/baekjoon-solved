function solution(rectangle, characterX, characterY, itemX, itemY) {
    characterX *= 2;
    characterY *= 2;
    itemX *= 2;
    itemY *= 2;
    
    const board = Array.from({ length: 102 }, () => Array(102).fill(0));
    
    rectangle.forEach(([x1, y1, x2, y2]) => {
        x1 *= 2;
        y1 *= 2;
        x2 *= 2;
        y2 *= 2;
        
        for (let i = x1; i <= x2; i++) {
            for (let j = y1; j <= y2; j++) {
                if (x1 < i && i < x2 && y1 < j && j < y2) {
                    board[i][j] = 2;
                } else if (board[i][j] !== 2) {
                    board[i][j] = 1;
                }
            }
        }
    })
    
    const queue = [[characterX, characterY, 0]];
    const visited = new Set([`${characterX},${characterY}`]);
    
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    
    while (queue.length) {
        const [x, y, deps] = queue.shift();
        
        if (x === itemX && y === itemY) {
            return deps / 2;
        }
        for (let [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;
            
            if (!visited.has(`${nx},${ny}`) && board[nx][ny] === 1) {
                visited.add(`${nx},${ny}`);
                queue.push([nx, ny, deps + 1]);
            }
        }
    }
}
