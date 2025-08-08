function solution(rows, columns, queries) {
    const answer = [];
    
    const arr = Array.from({length: rows}, (_, i) => Array.from({length: columns}, (_, j) => (i * columns + j + 1)))
    
    for(const [x1, y1, x2, y2] of queries) {
        let temp = arr[x1-1][y1-1];
        let min = temp;
        for(let i = y1; i < y2; i++) {
            [temp, arr[x1-1][i]] = [arr[x1-1][i], temp];
            if(min > temp) min = temp;
        }
        for(let i = x1; i < x2; i++) {
            [temp, arr[i][y2-1]] = [arr[i][y2-1], temp];
            if(min > temp) min = temp;
        }
        for(let i = y2-2; i >= y1-1; i--) {
            [temp, arr[x2-1][i]] = [arr[x2-1][i], temp];
            if(min > temp) min = temp;
        }
        for(let i = x2-2; i >= x1-1; i--) {
            [temp, arr[i][y1-1]] = [arr[i][y1-1], temp];
            if(min > temp) min = temp;
        }
        answer.push(min)
    }
    return answer;
    
    1, 2, 3
    4, 5, 6
}