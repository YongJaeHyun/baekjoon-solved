function solution(dirs) {
    let [x, y] = [0, 0];
    
    const convertObj = {
        U: [0, 1],
        D: [0, -1],
        R: [1, 0],
        L: [-1, 0],
    }
    
    const visited = new Set();
    for(const dir of dirs){
        const [dx, dy] = convertObj[dir];
        const newX = x + dx;
        const newY = y + dy;
        if(newX < -5 || newX > 5 || newY < -5 || newY > 5) continue;
        
        visited.add(`${x}${y}${newX}${newY}`);
        visited.add(`${newX}${newY}${x}${y}`);
        [x, y] = [newX, newY];
    }
    return visited.size / 2;
}