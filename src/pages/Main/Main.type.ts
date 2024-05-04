export interface MainViewProps {
    squares: string[]|null[];
    level: string;
    playerScore: number;
    computerScore: number;
    winnerResult: string;
    showResultModal: boolean;
    handleClickSquare: (index: number) => void;
    handleToggleShowResultModal: () => void;
    handleExitGame: () => void;
}