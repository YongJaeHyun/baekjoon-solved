function solution(players, m, k) {
    let answer = 0;
    let servers = [];
    
    for(let time = 0; time < 24; time++){
        servers = servers.filter(({ end }) => time < end);
        
        const currPlayers = players[time];
        const requireServerLength = Math.floor(currPlayers / m);
        
        if(requireServerLength > servers.length){
            let addServerCnt = requireServerLength - servers.length;
            while(addServerCnt--){
                servers.push({ start: time, end: time + k });
                answer += 1;
            }
        }
    }
    
    return answer;
}