import { useCallback, useState } from "react";
import StartView from "./Start.view"
import { getItemsFromLocalStorage, storeItemsToLocalStorage } from "@/helpers/localStorage";
import { useNavigate } from "react-router-dom";
import { Level, ScoreHistory } from "@/types/game";

const Start: React.FC = () => {
    const scoreHistories: ScoreHistory[] = getItemsFromLocalStorage('scoreHistories') || null;

    const [level, setLevel] = useState<Level>('Easy');
    const [showScoreHistoresModal, setShowScoreHistoresModal] = useState<boolean>(false);

    const navigate = useNavigate();

    const handleToggleShowScoreHistoriesModal = useCallback(() => {
        setShowScoreHistoresModal(!showScoreHistoresModal);
    }, [showScoreHistoresModal]);

    const handleChangeLevel = useCallback((level: Level) => {
        setLevel(level);
    }, []);

    const handleStartGame = useCallback(() => {
        storeItemsToLocalStorage('isStartGame', true);
        storeItemsToLocalStorage('gameDifficulty', level);
        navigate('/main');
    }, [level]);

    return <StartView
        scoreHistories={scoreHistories}
        level={level}
        showScoreHistoriesModal={showScoreHistoresModal}
        handleToggleShowScoreHistoriesModal={handleToggleShowScoreHistoriesModal}
        handleChangeLevel={handleChangeLevel}
        handleStartGame={handleStartGame}
    />;
};

export default Start;