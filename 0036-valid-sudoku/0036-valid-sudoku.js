function isValidSudoku(board) {
    for (let i = 0; i < 9; i++) {
        if (!isUnique(board[i]) || !isUnique(getColumn(board, i)) || !isUnique(getSubgrid(board, i))) {
            return false;
        }
    }
    return true;
}

function isUnique(arr) {
    const seen = {};
    for (let val of arr) {
        if (val !== "." && seen[val]) {
            return false;
        }
        seen[val] = true;
    }
    return true;
}

function getColumn(board, colIndex) {
    const column = [];
    for (let i = 0; i < 9; i++) {
        column.push(board[i][colIndex]);
    }
    return column;
}

function getSubgrid(board, subgridIndex) {
    const subgrid = [];
    const startRow = Math.floor(subgridIndex / 3) * 3;
    const startCol = (subgridIndex % 3) * 3;
    for (let i = startRow; i < startRow + 3; i++) {
        for (let j = startCol; j < startCol + 3; j++) {
            subgrid.push(board[i][j]);
        }
    }
    return subgrid;
}
