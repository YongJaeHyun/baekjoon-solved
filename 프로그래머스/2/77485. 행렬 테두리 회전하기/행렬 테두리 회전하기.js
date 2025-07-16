function solution(rows, columns, queries) {
    const answer = [];
    const arr = Array.from({ length: rows }, (_, i) => Array.from({ length: columns }, (_, j) => columns*i + j+1))
    const dx = [0, 1, 0, -1];
    const dy = [1, 0, -1, 0];
    
    function rotateEdge(x, y, xLength, yLength) {
        let minNum = Infinity;
        const [originX, originY] = [x, y];
        
        for(let i = 0; i < 4; i++) {
            if(i % 2 === 0) {
                for(let j = 0; j < yLength; j++) {
                    x += dx[i];
                    y += dy[i];
                    minNum = Math.min(minNum, arr[originX][originY]);
                    [arr[originX][originY], arr[x][y]] = [arr[x][y], arr[originX][originY]];
                }
            } else {
                for(let j = 0; j < xLength; j++) {
                    x += dx[i];
                    y += dy[i];
                    minNum = Math.min(minNum, arr[originX][originY]);
                    [arr[originX][originY], arr[x][y]] = [arr[x][y], arr[originX][originY]];
                }
            }
        }
        
        answer.push(minNum);
    }
    
    for(const [x1, y1, x2, y2] of queries) {
        const xLength = x2 - x1;
        const yLength = y2 - y1;
        rotateEdge(x1 - 1, y1 - 1, xLength, yLength);
    }
    
    return answer;
}