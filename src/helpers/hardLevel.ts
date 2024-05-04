import { calculateGameWinner, isBoardFull } from "./calculateGameWinner";

const minimax = (squares: string[] | null[], depth: number, isMaximizingPlayer: boolean) => {
    const winner = calculateGameWinner(squares);
    if (winner === 'X') return -10 + depth;
    if (winner === 'O') return 10 - depth;
    if (isBoardFull(squares)) return 0;

    if (isMaximizingPlayer) {
        let bestScore = -Infinity;
        for (let i = 0; i < squares.length; i++) {
            if (squares[i] === null) {
                squares[i] = 'O';
                let score = minimax(squares, depth + 1, false);
                squares[i] = null;
                bestScore = Math.max(score, bestScore);
            }
        }
        return bestScore;
    } else {
        let bestScore = Infinity;
        for (let i = 0; i < squares.length; i++) {
            if (squares[i] === null) {
                squares[i] = 'X';
                let score = minimax(squares, depth + 1, true);
                squares[i] = null;
                bestScore = Math.min(score, bestScore);
            }
        }
        return bestScore;
    }
};

export const getHardComputerMove = (squares: string[] | null[]) => {
    let bestScore = -Infinity;
    let move = -1;
    for (let i = 0; i < squares.length; i++) {
        if (squares[i] === null) {
            squares[i] = 'O';
            let score = minimax(squares, 0, false);
            squares[i] = null;
            if (score > bestScore) {
                bestScore = score;
                move = i;
            }
        }
    }
    return move;
};