function solution(N, number) {
    const arr = Array.from({ length: 8 }, () => []);
    const visited = Array(32001).fill(false);
    arr[0] = [N];
    visited[0] = true;
    visited[N] = true;
    
    for(let i = 0; i < arr.length - 1; i++) {
        let ij = i;
        let ik = 0;
        while(ij >= 0) {
            for(let j = 0; j < arr[ij].length; j++) {
                for(let k = 0; k < arr[ik].length; k++) {
                    const left = arr[ij][j];
                    const right = arr[ik][k];
                    const plusNum = left + right;
                    const minusNum = left - right;
                    const divideNum = Math.floor(left / right);
                    const multiplyNum = left * right;

                    if(plusNum <= 32000 && !visited[plusNum]) {
                        visited[plusNum] = true;
                        arr[i + 1].push(plusNum);   
                    }
                    if(minusNum >= 1 && !visited[minusNum]) {
                        visited[minusNum] = true;
                        arr[i + 1].push(minusNum); 
                    }
                    if(divideNum >= 1 && !visited[divideNum]) {
                        visited[divideNum] = true;
                        arr[i + 1].push(divideNum);  
                    }
                    if(multiplyNum <= 32000 && !visited[multiplyNum]) {
                        visited[multiplyNum] = true;
                        arr[i + 1].push(multiplyNum);  
                    }
                }
            }
            ij--;
            ik++;
        }
        arr[i + 1].push(Number(`${N}`.repeat(i + 2)));  
    }
    
    const minCount = arr.findIndex((el) => el.includes(number)) + 1;
    return minCount ? minCount : -1;
}