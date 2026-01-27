function solution(cards) {
  const visited = Array(cards.length).fill(false);
  const cycles = [];

  for (let i = 0; i < cards.length; i++) {
    if (visited[i]) continue;

    let count = 0;
    let index = i;

    while (!visited[index]) {
      visited[index] = true;
      count++;
      index = cards[index] - 1;
    }

    if (count > 0) cycles.push(count);
  }

  if (cycles.length < 2) return 0;

  cycles.sort((a, b) => b - a);
  return cycles[0] * cycles[1];
}
