import { ScoreHistoriesProps } from "./ScoreHistores.type"
import ScoreHistoriesView from "./ScoreHistories.view"

const ScoreHistores: React.FC<ScoreHistoriesProps> = ({ scoreHistories, showScoreHistoriesModal, handleToggleShowScoreHistoriesModal }) => {
    return <ScoreHistoriesView
        scoreHistories={scoreHistories}
        showScoreHistoriesModal={showScoreHistoriesModal}
        handleToggleShowScoreHistoriesModal={handleToggleShowScoreHistoriesModal}
    />;
};

export default ScoreHistores;