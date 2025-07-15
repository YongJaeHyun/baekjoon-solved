function solution(N, road, K) {
  const adj = Array.from({ length: N + 1 }, () => []);
  
  for (const [a, b, t] of road) {
    adj[a].push([b, t]);
    adj[b].push([a, t]);
  }

  const dist = Array(N + 1).fill(Infinity);
  dist[1] = 0;

  const pq = [[1, 0]];

  while (pq.length > 0) {
    const [current, time] = pq.shift();

    for (const [next, t] of adj[current]) {
      if (dist[next] > time + t) {
        dist[next] = time + t;
        pq.push([next, dist[next]]);
      }
    }

    pq.sort((a, b) => a[1] - b[1]);
  }

  return dist.filter(d => d <= K).length;
}
