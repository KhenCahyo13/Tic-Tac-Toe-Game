import { calculateGameWinner } from "./calculateGameWinner";
import { getEasyComputerMove } from "./easyLevel";

const findEmptyCorner = (squares: string[] | null[]) => {
    const corners = [0, 2, 6, 8];
    for (let corner of corners) {
        if (squares[corner] === null) {
            return corner;
        }
    }

    return null;
};

const findWinningMove = (squares: string[] | null[], player: 'X' | 'O') => {
    for (let i = 0; i < squares.length; i++) {
        if (squares[i]) continue;
        let newSquares = squares.slice();
        newSquares[i] = player;
        if (calculateGameWinner(newSquares) === player) {
            return i;
        }
    }
    return null;
};

export const getMediumComputerMove = (squares: string[] | null[]) => {
    let winMove = findWinningMove(squares, 'O');
    if (winMove !== null) return winMove;

    let blockMove = findWinningMove(squares, 'X');
    if (blockMove !== null) return blockMove;

    if (squares[4] === null) return 4;

    let cornerMove = findEmptyCorner(squares);
    if (cornerMove !== null) return cornerMove;

    return getEasyComputerMove(squares);
};