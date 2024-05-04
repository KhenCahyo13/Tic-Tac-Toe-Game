import { HasStartGameProps } from "./HasStartGame.type";
import { Navigate } from "react-router-dom";
import { getItemsFromLocalStorage } from "@/helpers/localStorage";
import HasStartGameView from "./HasStartGame.view";

const HasStartGame: React.FC<HasStartGameProps> = ({ children }) => {
    const isStartGame = getItemsFromLocalStorage('isStartGame') || false;

    return isStartGame ? <HasStartGameView>{children}</HasStartGameView> : <Navigate to={'/'} />;
};


export default HasStartGame;