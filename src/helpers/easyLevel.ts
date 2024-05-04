export const getEasyComputerMove = (squares: string[] | null[]) => {
    const availableSquares = squares.map((square, index) => square === null ? index : null).filter((val) => val !== null);
        
    if (availableSquares.length === 0) return undefined;

    const randomIndex = Math.floor(Math.random() * availableSquares.length);
    return availableSquares[randomIndex];
};