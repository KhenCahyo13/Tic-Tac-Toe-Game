import { memo } from "react";
import { TicTacToeBoardProps } from "./TicTacToeBoard.type";
import X from "./X";
import O from "./O";

const TicTacToeBoardView: React.FC<TicTacToeBoardProps> = ({ squares, handleClickSquare }) => (
    <div className="grid grid-cols-3 gap-4">
        {squares.map((square, index) => (
            <div className="w-24 h-24 border-2 border-gray-400 flex justify-center items-center rounded-lg" key={index} onClick={() => handleClickSquare(index)}>
                {square === 'X' ? (
                    <X
                        uniqueKey={index}
                    />
                ) : square === 'O' ? (
                    <O
                        uniqueKey={index}
                    />
                ) : null}
            </div>
        ))}
    </div>
);

export default memo(TicTacToeBoardView);