function solution(maps) {
    let times = 0;
    let startPos = []
    let leverPos = []
    let endPos = []
    
    // 1. start 지점 좌표 찾기
    for(let x = 0; x < maps.length; x++) {
        for(let y = 0; y < maps[0].length; y++) {
            const current = maps[x][y]
            if(current === "S") startPos = [x, y]
            else if(current === "L") leverPos = [x, y]
            else if(current === "E") endPos = [x, y]
        }
    }
    // 2. 레버 좌표로 이동하면서 time 증가
    const leverMoveCount = moveTo(startPos, leverPos, maps)
    
    if(leverMoveCount === -1) return -1
    times += leverMoveCount
    
    // 3. 도착 좌표로 이동하면서 time 증가
    const endMoveCount = moveTo(leverPos, endPos, maps)
    
    if(endMoveCount === -1) return -1
    times += endMoveCount
    
    return times;
}

function moveTo([currentX, currentY], [targetX, targetY], maps) {
    const queue = [[currentX, currentY, 0]]
    const visited = Array.from({ length: maps.length }, () => Array(maps[0].length).fill(false));
    visited[currentX][currentY] = true;
    let moveCount = -1
    
    const dx = [1, -1, 0, 0]
    const dy = [0, 0, 1, -1]
    
    while(queue.length > 0) {
        let [x, y, count] = queue.shift()
        
        if(x === targetX && y === targetY) {
            moveCount = count;
            break;
        }
        
        for(let i = 0; i < 4; i++) {
            const lx = x + dx[i]
            const ly = y + dy[i]
            if(lx >= 0 && lx < maps.length && ly >= 0 && ly < maps[0].length && !visited[lx][ly] && maps[lx][ly] !== "X") {
                visited[lx][ly] = true
                queue.push([lx, ly, count + 1])
            }
        }
    }
    
    return moveCount
}