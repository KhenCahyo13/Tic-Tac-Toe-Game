import { TicTacToeBoardProps } from "./TicTacToeBoard.type";
import TicTacToeBoardView from "./TicTacToeBoard.view"

const TicTacToeBoard: React.FC<TicTacToeBoardProps> = ({ squares, handleClickSquare }) => {
    return <TicTacToeBoardView
        squares={squares}
        handleClickSquare={handleClickSquare}
    />;
};

export default TicTacToeBoard;