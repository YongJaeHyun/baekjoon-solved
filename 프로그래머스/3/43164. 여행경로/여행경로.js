function solution(tickets) {
    const answer = [];
    tickets.sort();
    const startTickets = tickets.filter((ticket) => ticket[0] === "ICN");
    const visited = Array(tickets.length).fill(false);
    
    const dfs = ([start, end], path, visited) => {
        if(path.length === tickets.length + 1) return answer.push(path);
        
        for(let i = 0; i < tickets.length; i++) {
            if(visited[i]) continue;
            const [nextStart, nextEnd] = tickets[i];
            if(end === nextStart) {
                visited[i] = true;
                dfs([nextStart, nextEnd], [...path, nextEnd], visited);
                visited[i] = false;
            }
            
        }
    }
    
    for(const startTicket of startTickets) {
        const index = tickets.indexOf(startTicket);
        visited[index] = true;
        dfs(startTicket, startTicket, visited);
        visited[index] = false;
    }
    
    answer.sort();
    return answer[0];
}