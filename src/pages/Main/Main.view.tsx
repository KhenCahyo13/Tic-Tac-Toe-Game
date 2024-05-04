import GradientText from "@/components/GradientText";
import { memo } from "react";
import ScoreBoard from "./ScoreBoard";
import TicTacToeBoard from "./TicTacToeBoard";
import { MainViewProps } from "./Main.type";

const MainView: React.FC<MainViewProps> = ({ squares, handleClickSquare }) => (
    <main className="md:my-24">
        <section className="custom-container">
            <div className="flex flex-col items-center gap-8">
                {/* Header VS Text */}
                <div className="flex flex-col gap-2">
                    <GradientText text="YOU" size="xl" />
                    <GradientText text="VS" size="base" />
                    <GradientText text="EASY COMPUTER" size="xl" />
                </div>
                {/* Score Board */}
                <ScoreBoard />
                {/* Tic Tac Toe Board */}
                <TicTacToeBoard
                    squares={squares}
                    handleClickSquare={handleClickSquare}
                />
            </div>
        </section>
    </main>
);

export default memo(MainView);