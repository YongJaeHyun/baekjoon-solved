function solution(strings, n) {
    return strings.sort().sort((a,b)=>a.codePointAt(n)-b.codePointAt(n));
}