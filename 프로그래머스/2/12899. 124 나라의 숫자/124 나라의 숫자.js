function solution(n) {
    let answer = '';
    const nums = [1, 2, 4]
    
    while(n > 0) {
        const mod = (n - 1) % 3
        n = ~~((n - 1) / 3)
        answer = nums[mod] + answer
    }
    
    return answer;
}