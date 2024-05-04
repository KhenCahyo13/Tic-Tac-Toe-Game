import { useCallback, useEffect, useState } from "react";
import MainView from "./Main.view"
import { calculateGameWinner } from "@/helpers/calculateGameWinner";
import { getEasyComputerMove } from "@/helpers/easyLevel";
import { getMediumComputerMove } from "@/helpers/mediumLevel";
import { getHardComputerMove } from "@/helpers/hardLevel";
import { useNavigate } from "react-router-dom";
import { getItemsFromLocalStorage, storeItemsToLocalStorage } from "@/helpers/localStorage";
import { Level } from "@/types/game";

const Main: React.FC = () => {
    const level: Level = getItemsFromLocalStorage('gameDifficulty');

    const [turn, setTurn] = useState<string>('Player');
    const [squares, setSquares] = useState<string[] | null[]>(Array(9).fill(null));
    const [playerScore, setPlayerScore] = useState<number>(0);
    const [computerScore, setComputerScore] = useState<number>(0);
    const [showResultModal, setShowResultModal] = useState<boolean>(false);
    const [winnerResult, setWinnerResult] = useState<string>('');

    const navigate = useNavigate();

    const handleExitGame = useCallback(() => {
        storeItemsToLocalStorage('isStartGame', false);
        navigate('/');
    }, []);

    const handleToggleShowResultModal = useCallback(() => {
        setShowResultModal(!showResultModal);
    }, [showResultModal]);

    const resetBoard = useCallback(() => {
        setSquares(Array(9).fill(null));
        setTurn('Player');
        setShowResultModal(true);
    }, []);

    const handleComputerTurn = useCallback(() => {
        if (turn !== 'Computer') return;
    
        setSquares((prevSquares) => {
            const index = level === 'Easy' ? getEasyComputerMove(prevSquares) : level === 'Medium' ? getMediumComputerMove(prevSquares) : level === 'Hard' ? getHardComputerMove(prevSquares) : null;
            if (index === undefined || index === null) {
                return prevSquares;
            }
        
            const newSquares = prevSquares.slice();
            newSquares[index] = 'O';
            return newSquares;
        });
    }, [turn, getEasyComputerMove]);

    const handleClickSquare = useCallback((index: number) => {
        if (turn !== 'Player') return;
    
        setSquares((prevSquares) => {
            if (prevSquares[index] || calculateGameWinner(squares)) {
                return prevSquares;
            }
    
            const newSquares = prevSquares.slice();
            newSquares[index] = 'X';
            return newSquares;
        });
        setTurn('Computer');
    }, [turn, calculateGameWinner]);    
    
    useEffect(() => {
        const result = calculateGameWinner(squares);
        if (result) {
            if (result === 'X') {
                setPlayerScore((score) => score + 1);
                setWinnerResult('Player');
            } else if (result === 'O') {
                setComputerScore((score) => score + 1);
                setWinnerResult('Computer');
            } else if (result === 'Draw') {
                setWinnerResult('Draw');
            }
            resetBoard();
        }
    }, [squares, calculateGameWinner, resetBoard]);

    useEffect(() => {
        if (turn === 'Computer') {
            const timer = setTimeout(() => {
                handleComputerTurn();
                setTurn('Player');
            }, 500);
    
            return () => clearTimeout(timer);
        }
    }, [turn, handleComputerTurn]);

    return <MainView
        squares={squares}
        level={level.toUpperCase()}
        playerScore={playerScore}
        computerScore={computerScore}
        winnerResult={winnerResult}
        showResultModal={showResultModal}
        handleClickSquare={handleClickSquare}
        handleToggleShowResultModal={handleToggleShowResultModal}
        handleExitGame={handleExitGame}
    />;
};

export default Main;