function solution(n, l, r) {
    let answer = 0;
    
    for(let i = l - 1; i < r; i++) {
        let divide = i
        let isValid = true
        
        while(divide > 0) {
            const mod = divide % 5
            divide = Math.floor(divide / 5)
            
            if(mod === 2) {
                isValid = false
                break;
            }
        }
        
        if(isValid) answer++
    }
    
    return answer
}