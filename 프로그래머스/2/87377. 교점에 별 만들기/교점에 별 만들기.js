function solution(line) {
  const points = [];

  // 1. 교점 찾기
  for (let i = 0; i < line.length; i++) {
    for (let j = i + 1; j < line.length; j++) {
      const [a1, b1, c1] = line[i];
      const [a2, b2, c2] = line[j];
        
      const denom = a1 * b2 - a2 * b1;

      if (denom === 0) continue;

      const x = (b1 * c2 - b2 * c1) / denom;
      const y = (c1 * a2 - c2 * a1) / denom;

      if (!Number.isInteger(x) || !Number.isInteger(y)) continue;

      points.push([x, y]);
    }
  }

  // 2. 최소/최대 좌표
  let [minX, maxX, minY, maxY] = [Infinity, -Infinity, Infinity, -Infinity];
  for (const [x, y] of points) {
    minX = Math.min(minX, x);
    maxX = Math.max(maxX, x);
    minY = Math.min(minY, y);
    maxY = Math.max(maxY, y);
  }

  const width = maxX - minX + 1;
  const height = maxY - minY + 1;

  // 3. '.'으로 초기화
  const answer = Array.from({ length: height }, () =>
    Array(width).fill(".")
  );

  // 4. 별 찍기
  for (const [x, y] of points) {
    const row = maxY - y;
    const col = x - minX;
    answer[row][col] = "*";
  }

  return answer.map((row) => row.join(""));
}
