export const isBoardFull = (squares: string[] | null[]) => {
    return squares.every(square => square !== null);
}

export const calculateGameWinner = (squares: string[] | null[]) => {
    const lines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }

    const isDraw = isBoardFull(squares);
    if (isDraw) {
        return 'Draw';
    }

    return null;
};