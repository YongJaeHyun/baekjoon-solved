function solution(storage, requests) {
    storage = storage.map((row) => row.split(""));
    const pickable = Array.from({ length: storage.length }, () => Array(storage[0].length).map(() => false));
    const colLength = pickable.length;
    const rowLength = pickable[0].length;
    for(let i = 0; i < colLength; i++) {
        for(let j = 0; j < rowLength; j++) {
            if(i === 0 || j === 0 || i === colLength - 1 || j === rowLength - 1) {
                pickable[i][j] = true;
            }
        }
    }
    
    for(const request of requests) {
        const target = request[0];
        const duplicatedPickable = JSON.parse(JSON.stringify(pickable));
        for(let i = 0; i < colLength; i++) {
            for(let j = 0; j < rowLength; j++) {
                const container = storage[i][j];
                if(request.length === 1) {
                    if(duplicatedPickable[i][j] && container === target) {
                        storage[i][j] = "";
                        revalidatePickable(i, j);
                    }
                } else {
                    if(container === target) {
                        storage[i][j] = "";
                        revalidatePickable(i, j);
                    }
                }
            }
        }
    }
    
    function revalidatePickable(i, j) {
        const dx = [-1, 1, 0, 0];
        const dy = [0, 0, -1, 1];

        const visited = Array.from({ length: colLength }, () => Array(rowLength).fill(false));
        const queue = [[i, j]];
        const emptyRegion = [[i, j]];
        visited[i][j] = true;

        let isConnectedToOutside = false;

        while (queue.length) {
            const [x, y] = queue.shift();

            if (x === 0 || y === 0 || x === colLength - 1 || y === rowLength - 1) {
                isConnectedToOutside = true;
            }

            for (let d = 0; d < 4; d++) {
                const nx = x + dx[d];
                const ny = y + dy[d];

                if (nx < 0 || ny < 0 || nx >= colLength || ny >= rowLength) continue;
                if (visited[nx][ny]) continue;

                if (storage[nx][ny] === "") {
                    visited[nx][ny] = true;
                    queue.push([nx, ny]);
                    emptyRegion.push([nx, ny]);
                }
            }
        }

        if (isConnectedToOutside) {
            for (const [x, y] of emptyRegion) {
                for (let d = 0; d < 4; d++) {
                    const nx = x + dx[d];
                    const ny = y + dy[d];

                    if (nx < 0 || ny < 0 || nx >= colLength || ny >= rowLength) continue;
                    if (storage[nx][ny] !== "") {
                        pickable[nx][ny] = true;
                    }
                }
            }
        }
    }

    return storage.flat().filter((container) => container).length;
}