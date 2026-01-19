function solution(game_board, table) {
    let answer = 0;
    const emptyPlaces = {}
    const pieces = []
    
    // 1. 게임보드에서 빈 공간 추출 및 정규화
    for(let x = 0; x < game_board.length; x++) {
        for(let y = 0; y < game_board.length; y++) {
            const cell = game_board[x][y]
            if(cell === 1) continue
            
            const place = findEmtpyPlace(x, y, game_board)
            const normalizedPlace = normalize(place)
            const stringifiedPlace = JSON.stringify(normalizedPlace)
            emptyPlaces[stringifiedPlace] = (emptyPlaces[stringifiedPlace] || 0) + 1
        }
    }
    
    // 2. 테이블에서 퍼즐 조각 추출 및 회전 + 정규화
    for(let x = 0; x < table.length; x++) {
        for(let y = 0; y < table.length; y++) {
            const cell = table[x][y]
            if(cell === 0) continue
            
            const piece = findPuzzlePiece(x, y, table)
            const base = normalize(piece)

            const rotatedPieces = []
            let cur = base

            for (let i = 0; i < 4; i++) {
                rotatedPieces.push(cur)
                cur = normalize(rotate(cur))
            }

            pieces.push(rotatedPieces)
        }
    }
    
    // 3. 하나씩 비교 후, 같은 게 있으면 제거 및 answer에 칸수 추가
    for(let rotatedPieces of pieces) {
        for(let piece of rotatedPieces) {
            const stringifiedPiece = JSON.stringify(piece)
            if(!!emptyPlaces[stringifiedPiece]) {
                emptyPlaces[stringifiedPiece] -= 1
                answer += piece.length
                break;
            }
        }
        
    }
    
    return answer;
}

function rotate(piece) {
    return piece.map(([x, y]) => [y, -x])
}

function normalize(arr) {
    arr.sort(([ax, ay], [bx, by]) => {
        if (ax !== bx) return ax - bx
        return ay - by
    })

    const [baseX, baseY] = arr[0]

    const normalized = arr.map(([x, y]) => [x - baseX, y - baseY])

    normalized.sort(([ax, ay], [bx, by]) => {
        if (ax !== bx) return ax - bx
        return ay - by
    })

    return normalized
}


function findEmtpyPlace(startRow, startCol, board) {
    const dx = [1, -1, 0, 0]
    const dy = [0, 0, 1, -1]
    
    const placeCells = []
    const queue = [[startRow, startCol]]
    
    while(queue.length > 0) {
        const [x, y] = queue.shift()
        if(board[x][y] === 1) continue;
        
        board[x][y] = 1
        placeCells.push([x, y])
        
        for(let i = 0; i < 4; i++) {
            const nx = x + dx[i]
            const ny = y + dy[i]
            
            if(nx >= 0 && nx < board.length && ny >= 0 && ny < board[0].length && board[nx][ny] === 0) {
                queue.push([nx, ny])
            }
        }
    }
    
    return placeCells
}

function findPuzzlePiece(startRow, startCol, table) {
    const dx = [1, -1, 0, 0]
    const dy = [0, 0, 1, -1]
    
    const pieceCells = []
    const queue = [[startRow, startCol]]
    
    while(queue.length > 0) {
        const [x, y] = queue.shift()
        if(table[x][y] === 0) continue;
        
        table[x][y] = 0
        pieceCells.push([x, y])
        
        for(let i = 0; i < 4; i++) {
            const nx = x + dx[i]
            const ny = y + dy[i]
            
            if(nx >= 0 && nx < table.length && ny >= 0 && ny < table[0].length && table[nx][ny] === 1) {
                queue.push([nx, ny])
            }
        }
    }
    
    return pieceCells
}