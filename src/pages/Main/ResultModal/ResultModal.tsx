import { ResultModalProps } from "./ResultModal.type";
import ResultModalView from "./ResultModal.view"

const ResultModal: React.FC<ResultModalProps> = ({ showResultModal, winnerResult, handleToggleShowResultModal }) => {
    return <ResultModalView
        showResultModal={showResultModal}
        winnerResult={winnerResult}
        handleToggleShowResultModal={handleToggleShowResultModal}
    />;
};

export default ResultModal;