function solution(dirs) {
    let answer = 0;
    const arr = Array.from({length: 11}, () => new Array(11).fill(null).map(() => []));
    const convertObj = {
        U: [0, 1],
        D: [0, -1],
        R: [1, 0],
        L: [-1, 0],
    }
    const reverseDir = {
        U: "D",
        D: "U",
        R: "L",
        L: "R",
    }
    let [x, y] = [0, 0];
    
    for(const dir of dirs){
        const [dx, dy] = convertObj[dir];
        const newX = x + dx;
        const newY = y + dy;
        if(newX < -5 || newX > 5 || newY < -5 || newY > 5) continue;
        
        if(!arr[x + 5][y + 5].includes(dir) && !arr[newX + 5][newY + 5].includes(reverseDir[dir])){
            arr[x + 5][y + 5].push(dir);
            answer++;
        }
        x += dx;
        y += dy;
    }
    return answer;
}