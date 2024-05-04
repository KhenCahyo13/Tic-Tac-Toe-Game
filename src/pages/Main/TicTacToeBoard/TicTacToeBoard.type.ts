export interface TicTacToeBoardProps {
    squares: string[]|null[];
    handleClickSquare: (index: number) => void;
}