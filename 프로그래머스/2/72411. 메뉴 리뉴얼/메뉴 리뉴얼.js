function getCombinations(arr, length) {
  const result = [];

  function dfs(start, comb) {
    if (comb.length === length) {
      result.push(comb);
      return;
    }
      
    for (let i = start; i < arr.length; i++) {
      dfs(i + 1, comb + arr[i]);
    }
  }

  dfs(0, "");
  return result;
}

function solution(orders, course) {
  const answer = [];

  for (const c of course) {
    const combosMap = new Map();

    for (const order of orders) {
      const sortedOrder = [...order].sort();
      const combos = getCombinations(sortedOrder, c);

      for (const combo of combos) {
        combosMap.set(combo, (combosMap.get(combo) || 0) + 1);
      }
    }

    let maxCount = 0;
    for (const count of combosMap.values()) {
      if (count >= 2 && count > maxCount) {
        maxCount = count;
      }
    }

    for (const [combo, count] of combosMap) {
      if (count === maxCount && count >= 2) {
        answer.push(combo);
      }
    }
  }

  return answer.sort();
}
