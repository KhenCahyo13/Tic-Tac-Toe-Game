import GradientModal from "@/components/GradientModal";
import { ResultModalProps } from "./ResultModal.type";
import { memo } from "react";

const ResultModalView: React.FC<ResultModalProps> = ({ showResultModal, winnerResult, handleToggleShowResultModal }) => (
    <>
        {showResultModal && (
            <>
                {winnerResult === 'Player' && (
                    <GradientModal content={
                        <>
                            <span className="text-4xl">🤓</span>
                            <p className="text-base text-center">You Win</p>
                        </>
                    } onOkayClick={handleToggleShowResultModal} />
                )}
                {winnerResult === 'Computer' && (
                    <GradientModal content={
                        <>
                            <span className="text-4xl">😂</span>
                            <p className="text-base text-center">Computer Win</p>
                        </>
                    } onOkayClick={handleToggleShowResultModal} />
                )}
                {winnerResult === 'Draw' && (
                    <GradientModal content={
                        <>
                            <span className="text-4xl">😂</span>
                            <p className="text-base text-center">You draw while vs Computer</p>
                        </>
                    } onOkayClick={handleToggleShowResultModal} />
                )}
            </>
        )}
    </>
);

export default memo(ResultModalView);