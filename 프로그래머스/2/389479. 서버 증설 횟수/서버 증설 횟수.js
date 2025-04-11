function solution(players, m, k) {
    let answer = 0;
    let activeServers = [];

    for (let hour = 0; hour < 24; hour++) {
        activeServers = activeServers.filter(server => server.end > hour);

        const playerCount = players[hour];
        const neededServers = Math.floor(playerCount / m);

        const additionalServers = neededServers - activeServers.length;
        for (let i = 0; i < additionalServers; i++) {
            activeServers.push({ start: hour, end: hour + k });
            answer++;
        }
    }

    return answer;
}
