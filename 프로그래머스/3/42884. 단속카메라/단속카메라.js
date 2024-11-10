function solution(routes) {
    let answer = 0;
    routes.sort((a, b)=>a[1] - b[1]);
    
    let prevEnd;
    routes.forEach(([start, end], idx) => {
        if(idx === 0) prevEnd = end;
        if(prevEnd < start) {
            answer++
            prevEnd = end;
        }
    })
    return ++answer;
}