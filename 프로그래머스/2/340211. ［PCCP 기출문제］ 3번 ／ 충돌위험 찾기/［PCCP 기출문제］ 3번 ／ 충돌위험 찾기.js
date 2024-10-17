function solution(points, routes) {
  var answer = 0;
  if (routes.length > 0 && points.length > 0) {
    let moves = new Array(routes.length).fill().map(() => []);
    for (let i = 0; i < routes.length; i++) {
      for (let j = 0; j < routes[0].length - 1; j++) {
        const start = points[routes[i][j] - 1];
        const end = points[routes[i][j + 1] - 1];
        const moveDistance = [end[0] - start[0], end[1] - start[1]];
        for (let k = j === 0 ? 0 : 1; k <= Math.abs(moveDistance[0]); k++) {
          moves[i].push(
            moveDistance[0] < 0
              ? [start[0] - k, start[1]]
              : [start[0] + k, start[1]]
          );
        }
        for (let k = 1; k <= Math.abs(moveDistance[1]); k++) {
          moves[i].push(
            moveDistance[1] < 0
              ? [end[0], start[1] - k]
              : [end[0], start[1] + k]
          );
        }
      }
    }
    const max = Math.max(...moves.map((item) => item.length));
    for (let i = 0; i < max; i++) {
      let map = [...new Array(101)].map(() => [...new Array(101).fill(0)]);
      for (let j = 0; j < routes.length; j++) {
        if (moves[j][i]) {
          const [r, c] = moves[j][i];
          if (map[r][c] >= 2) {
            continue;
          } else if (map[r][c] === 1) {
            answer++;
            map[r][c]++;
          } else {
            map[r][c] = 1;
          }
        }
      }
    }
  }
  return answer;
}