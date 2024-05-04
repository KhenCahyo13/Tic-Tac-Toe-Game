import { memo } from "react";
import { HasStartGameProps } from "./HasStartGame.type";

const HasStartGameView: React.FC<HasStartGameProps> = ({ children }) => (
    <>
        {children}
    </>
);

export default memo(HasStartGameView);