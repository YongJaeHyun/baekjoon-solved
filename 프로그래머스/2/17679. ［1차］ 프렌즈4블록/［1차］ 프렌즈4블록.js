function solution(m, n, board) {
    let answer = 0;
    const arr = board.map((r) => r.split(""))
    const visited = new Set();
    
    while(true) {
        const prevAnswer = answer;
        
        for(let i = 0; i < m; i++){
            for(let j = 0; j < n; j++) {
                checkDeletingFriends(i+1, j+1, arr[i][j])
            }
        }
        
        for(let i = 0; i < m; i++){
            for(let j = 0; j < n; j++) {
                if(visited.has(`${i},${j}`)) {
                    arr[i][j] = null;
                    answer++;
                }
            }
        }
        
        visited.clear();
        
        if(answer === prevAnswer) return answer;
        else rearrange()
    }
     
    function checkDeletingFriends(x, y, char) {
        if(!char || x === m || y === n) return;
        
        if(arr[x-1][y] !== char) return;
        if(arr[x][y-1] !== char) return;
        if(arr[x][y] !== char) return;
        
        if(arr[x-1][y-1]) visited.add(`${x-1},${y-1}`)
        if(arr[x][y-1]) visited.add(`${x},${y-1}`)
        if(arr[x-1][y]) visited.add(`${x-1},${y}`)
        if(arr[x][y]) visited.add(`${x},${y}`)
    }
    
    function rearrange() {
        for (let j = 0; j < n; j++) {
            let emptyIndex = m-1;
            for (let i = m-1; i >= 0; i--) {
                if(!arr[i][j]) continue;
                
                [arr[emptyIndex][j], arr[i][j]] = [arr[i][j], arr[emptyIndex][j]];
                i = emptyIndex--;
            }
        }
    }
    
    return answer;
}