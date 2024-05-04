import GradientText from "@/components/GradientText";
import { memo } from "react";
import ScoreBoard from "./ScoreBoard";
import TicTacToeBoard from "./TicTacToeBoard";
import { MainViewProps } from "./Main.type";
import ResultModal from "./ResultModal";
import GradientButton from "@/components/GradientButton";

const MainView: React.FC<MainViewProps> = ({ squares, level, playerScore, computerScore, winnerResult, showResultModal, handleClickSquare, handleToggleShowResultModal, handleExitGame }) => (
    <main>
        {/* Result Modal */}
        <ResultModal
            showResultModal={showResultModal}
            winnerResult={winnerResult}
            handleToggleShowResultModal={handleToggleShowResultModal}
        />
        <section className="my-16 custom-container">
            <div className="flex flex-col items-center gap-8">
                {/* Header VS Text */}
                <div className="flex flex-col gap-2">
                    <GradientText text="YOU" size="xl" />
                    <GradientText text="VS" size="base" />
                    <GradientText text={`${level} COMPUTER`} size="xl" />
                </div>
                {/* Score Board */}
                <ScoreBoard
                    playerScore={playerScore}
                    computerScore={computerScore}
                />
                {/* Tic Tac Toe Board */}
                <TicTacToeBoard
                    squares={squares}
                    handleClickSquare={handleClickSquare}
                />
                {/* Exit Game */}
                <GradientButton label="Exit Game" onClick={handleExitGame} />
            </div>
        </section>
    </main>
);

export default memo(MainView);