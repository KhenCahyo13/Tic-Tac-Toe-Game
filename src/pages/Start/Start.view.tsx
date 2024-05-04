import { Fragment, memo } from "react";
import { difficultiesSelectItem } from "./Start.data";
import GradientHeading from "@/components/GradientHeading";
import GradientButton from "@/components/GradientButton";
import { StartViewProps } from "./Start.type";
import GradientSelectBox from "@/components/GradientSelectBox";
import { Level } from "@/types/game";
import ScoreHistores from "./ScoreHistores";

const StartView: React.FC<StartViewProps> = ({ scoreHistories, level, showScoreHistoriesModal, handleToggleShowScoreHistoriesModal, handleChangeLevel, handleStartGame }) => (
    <main className="h-screen w-full flex items-center justify-center">
        {/* Score Histores Modal */}
        <ScoreHistores
            scoreHistories={scoreHistories}
            showScoreHistoriesModal={showScoreHistoriesModal}
            handleToggleShowScoreHistoriesModal={handleToggleShowScoreHistoriesModal}
        />
        <section className="custom-container">
            <div className="flex flex-col items-center gap-4">
                {/* Header Text */}
                <GradientHeading text="TIC TAC TOE" />
                {/* Start Button */}
                <GradientButton label="Start" onClick={handleStartGame} />
                {/* Difficulty Select */}
                <div className="flex flex-col items-center gap-4 mt-4">
                    <p className="text-gray-400 tracking-wider">Difficulty</p>
                    <div className="flex items-center gap-4">
                        {difficultiesSelectItem.map((item) => (
                            <Fragment key={item.key}>
                                {item.value === level ? (
                                    <GradientSelectBox label={level} onClick={() => handleChangeLevel(item.value as Level)} />
                                ) : (
                                    <div className="p-4 border border-gray-400 text-gray-400 rounded-lg text-sm cursor-pointer" onClick={() => handleChangeLevel(item.value as Level)}>
                                        {item.label}
                                    </div>
                                )}
                            </Fragment>
                        ))}
                    </div>
                </div>
                {/* Button Show Score Histories Modal */}
                <div className="mt-8">
                    <GradientButton label="Score Histories" onClick={handleToggleShowScoreHistoriesModal} />
                </div>
            </div>
        </section>
    </main>
);

export default memo(StartView);