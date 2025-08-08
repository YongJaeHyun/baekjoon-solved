function solution(s) {
    const i = Math.floor(s.length / 2)
    if(s.length % 2 === 0) return s[i-1] + s[i];
    else return s[i];
}