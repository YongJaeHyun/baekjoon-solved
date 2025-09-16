function solution(strArr) {
    const map = new Map();
    for(const str of strArr) {
        const prevValue = map.get(str.length) ?? 0
        map.set(str.length, prevValue + 1);
    }
    
    return Math.max(...map.values());
}