function solution(a, b) {
    const [minNum, maxNum] = [a, b].sort((a, b) => a - b);
    
    let sum = 0;
    for(let i = minNum; i <= maxNum; i++) {
        sum += i;
    }
    return sum;
}