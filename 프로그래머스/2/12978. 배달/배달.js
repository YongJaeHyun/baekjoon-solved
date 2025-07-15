function solution(N, road, K) {
    const isDeliverableTown = Array(N + 1).fill(false);
    const roadMap = {};
    for(const [start, end, time] of road) {
        if(!roadMap[start]) roadMap[start] = [];
        if(!roadMap[end]) roadMap[end] = [];
        roadMap[start].push([end, time]);
        roadMap[end].push([start, time]);
    }
    
    const dfs = (currentTown, times, visited) => {
        isDeliverableTown[currentTown] = true;
        
        for(const [end, time] of roadMap[currentTown]) {
            if(!visited[end] && times + time <= K) {
                visited[end] = true;
                dfs(end, times + time, visited);
                visited[end] = false;
            }
        }
    }
    
    const visited = Array(N + 1).fill(false);
    dfs(1, 0, visited);
    
    return isDeliverableTown.filter((isAble) => isAble).length;
}