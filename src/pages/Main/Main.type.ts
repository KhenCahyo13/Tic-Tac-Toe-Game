export interface MainViewProps {
    squares: string[]|null[];
    playerScore: number;
    computerScore: number;
    winnerResult: string;
    showResultModal: boolean;
    handleClickSquare: (index: number) => void;
    handleToggleShowResultModal: () => void;
    handleExitGame: () => void;
}