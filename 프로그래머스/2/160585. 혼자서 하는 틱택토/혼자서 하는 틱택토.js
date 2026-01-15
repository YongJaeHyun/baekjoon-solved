function solution(board) {
  let o = 0, x = 0
  for (const row of board) {
    for (const c of row) {
      if (c === 'O') o++
      if (c === 'X') x++
    }
  }

  // 1. 개수 규칙
  if (!(o === x || o === x + 1)) return 0

  const oWin = isWin(board, 'O')
  const xWin = isWin(board, 'X')

  // 2. 동시에 이길 수 없음
  if (oWin && xWin) return 0

  // 3. O가 이겼으면 O가 한 수 더 많아야 함
  if (oWin && o !== x + 1) return 0

  // 4. X가 이겼으면 수가 같아야 함
  if (xWin && o !== x) return 0

  return 1
}


function isWin(board, player) {
  for (let i = 0; i < 3; i++) {
    if (board[i][0] === player && board[i][1] === player && board[i][2] === player) return true
    if (board[0][i] === player && board[1][i] === player && board[2][i] === player) return true
  }
  if (board[0][0] === player && board[1][1] === player && board[2][2] === player) return true
  if (board[0][2] === player && board[1][1] === player && board[2][0] === player) return true
  return false
}
