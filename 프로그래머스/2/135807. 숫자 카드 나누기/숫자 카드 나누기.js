function gcd(a, b) {
    while(b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
}

function gcdArray(arr) {
    return arr.reduce((acc, cur) => gcd(acc, cur));
}

function solution(arrayA, arrayB) {
    let answer = 0;
    
    // 철수 숫자들 모두 나누기 O, 영희 숫자들 모두 나누기 X
    const gcdA = gcdArray(arrayA);
    
    const isImpossibleB = arrayB.every((b) => b % gcdA !== 0);
    if(isImpossibleB) {
        answer = Math.max(answer, gcdA);
    }
    
    // 철수 숫자들 모두 나누기 X, 영희 숫자들 모두 나누기 O
    const gcdB = gcdArray(arrayB);
    
    const isImpossibleA = arrayA.every((a) => a % gcdB !== 0);
    if(isImpossibleA) {
        answer = Math.max(answer, gcdB);
    }
    
    return answer;
}