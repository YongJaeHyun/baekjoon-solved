function solution(n) {
    return Array.from({length: n}, (_, idx)=>idx+1).filter((num)=>n % num === 0).reduce((acc,curr)=>acc+curr, 0);
}