import { ScoreBoardProps } from "./ScoreBoard.type";
import ScoreBoardView from "./ScoreBoard.view"

const ScoreBoard: React.FC<ScoreBoardProps> = ({ playerScore, computerScore }) => {
    return <ScoreBoardView
        playerScore={playerScore}
        computerScore={computerScore}
    />;
};

export default ScoreBoard;