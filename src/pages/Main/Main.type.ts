export interface MainViewProps {
    squares: string[]|null[];
    isXNext: boolean;
    handleClickSquare: (index: number) => void;
}