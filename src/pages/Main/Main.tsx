import { useCallback, useState } from "react";
import MainView from "./Main.view"

const Main: React.FC = () => {
    const [squares, setSquares] = useState<string[]|null[]>(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState<boolean>(true);

    const handleClickSquare = useCallback((index: number) => {
        setSquares((prevSquares) => {
            if (prevSquares[index]) {
                return prevSquares;
            }

            const newSquares = prevSquares.slice();
            newSquares[index] = isXNext ? 'X' : 'O';
            setIsXNext(!isXNext);
            return newSquares;
        });
    }, [isXNext]);

    return <MainView
        squares={squares}
        isXNext={isXNext}
        handleClickSquare={handleClickSquare}
    />;
};

export default Main;