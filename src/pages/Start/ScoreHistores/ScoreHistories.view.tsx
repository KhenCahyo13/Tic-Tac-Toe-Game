import { memo } from "react";
import { ScoreHistoriesProps } from "./ScoreHistores.type";
import GradientModal from "@/components/GradientModal";

const ScoreHistories: React.FC<ScoreHistoriesProps> = ({ scoreHistories, showScoreHistoriesModal, handleToggleShowScoreHistoriesModal }) => (
    <>
        {showScoreHistoriesModal && (
            <GradientModal content={
                <div className="flex flex-col items-center gap-6">
                    {scoreHistories === null ? (
                        <p className="text-sm text-center">You have no score history. Please play first.</p>
                    ) : (
                        <>
                            {scoreHistories.map((score) => (
                                <div className="flex flex-col items-center gap-2" key={score.level}>
                                    <p className={`text-sm ${score.level === 'Easy' ? 'text-green-500' : score.level === 'Medium' ? 'text-yellow-500' : 'text-red-500'}`}>{score.level}</p>
                                    <p className="text-sm">{score.playerScore} - {score.computerScore}</p>
                                </div>
                            ))}
                        </>
                    )}
                </div>
            } onOkayClick={handleToggleShowScoreHistoriesModal} />
        )}
    </>
);

export default memo(ScoreHistories);