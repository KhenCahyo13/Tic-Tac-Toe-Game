import { useCallback, useState } from "react";
import StartView from "./Start.view"
import { storeItemsToLocalStorage } from "@/helpers/localStorage";
import { useNavigate } from "react-router-dom";
import { Level } from "@/types/game";

const Start: React.FC = () => {
    const [level, setLevel] = useState<Level>('Easy');

    const navigate = useNavigate();

    const handleChangeLevel = useCallback((level: Level) => {
        setLevel(level);
    }, []);

    const handleStartGame = useCallback(() => {
        storeItemsToLocalStorage('isStartGame', true);
        storeItemsToLocalStorage('gameDifficulty', level);
        navigate('/main');
    }, [level]);

    return <StartView
        level={level}
        handleChangeLevel={handleChangeLevel}
        handleStartGame={handleStartGame}
    />;
};

export default Start;