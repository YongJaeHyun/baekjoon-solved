function solution(edges) {
    const graphs = Array(1_000_001).fill(0);
    let totalLength = 0;
    let generatedNodeIdx = 0;
    let donutLike = 0;
    let stickLike = 0;
    let eightLike = 0;
    
    for(const [start, end] of edges) {
        graphs[start] ||= {send: 0, receive: 0}
        graphs[end] ||= {send: 0, receive: 0}
        graphs[start].send++
        graphs[end].receive++
    }
    
    for(let i = 1; i < graphs.length; i++){
        const {send, receive} = graphs[i];
        if(send >= 2 && receive === 0){
            generatedNodeIdx = i;
            totalLength = send;
        };
        if(send === 0) stickLike++
        if(send >= 2 && receive >= 2) eightLike++
    }
    
    donutLike = totalLength - stickLike - eightLike;
    return [generatedNodeIdx, donutLike, stickLike, eightLike];
}
// 생성 정점 번호, 도넛, 막대, 8자