function solution(n) {
    if (n === 1) return 1;
    if (n === 2) return 2;
    
    let a = 1, b = 2;
    for(let i = 3; i <= n; i++){
        const next = (a + b) % 1_000_000_007;
        a = b;
        b = next;
    }
     
    return b;
}