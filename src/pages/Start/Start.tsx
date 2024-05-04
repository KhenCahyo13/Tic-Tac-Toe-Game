import { useCallback } from "react";
import StartView from "./Start.view"
import { storeItemsToLocalStorage } from "@/helpers/localStorage";
import { useNavigate } from "react-router-dom";

const Start: React.FC = () => {
    const navigate = useNavigate();

    const handleStartGame = useCallback(() => {
        storeItemsToLocalStorage('isStartGame', true);
        navigate('/main');
    }, []);

    return <StartView
        handleStartGame={handleStartGame}
    />;
};

export default Start;