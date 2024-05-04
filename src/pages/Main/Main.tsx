import { useCallback, useEffect, useState } from "react";
import MainView from "./Main.view"
import { calculateGameWinner } from "@/helpers/calculateGameWinner";
import { getEasyComputerMove } from "@/helpers/easyLevel";
import { getMediumComputerMove } from "@/helpers/mediumLevel";
import { getHardComputerMove } from "@/helpers/hardLevel";
import { useNavigate } from "react-router-dom";
import { getItemsFromLocalStorage, storeItemsToLocalStorage } from "@/helpers/localStorage";
import { Level, ScoreHistory } from "@/types/game";

const Main: React.FC = () => {
    const level: Level = getItemsFromLocalStorage('gameDifficulty');
    const scoreHistories: ScoreHistory[] = getItemsFromLocalStorage('scoreHistories') || [] || null;

    const [turn, setTurn] = useState<string>('Player');
    const [squares, setSquares] = useState<string[] | null[]>(Array(9).fill(null));
    const [playerScore, setPlayerScore] = useState<number>(0);
    const [computerScore, setComputerScore] = useState<number>(0);
    const [showResultModal, setShowResultModal] = useState<boolean>(false);
    const [winnerResult, setWinnerResult] = useState<string>('');

    const navigate = useNavigate();

    const handleExitGame = useCallback(() => {
        const existingIndex = scoreHistories.findIndex((sh) => sh.level === level);
    
        const scoreHistory = {
            level: level,
            playerScore: playerScore,
            computerScore: computerScore
        };
    
        let scoreHistoryItems;
        if (existingIndex !== -1) {
            scoreHistoryItems = [...scoreHistories];
            scoreHistoryItems[existingIndex] = scoreHistory;
        } else {
            scoreHistoryItems = [...scoreHistories, scoreHistory];
        }
    
        storeItemsToLocalStorage('isStartGame', false);
        storeItemsToLocalStorage('scoreHistories', scoreHistoryItems);
        navigate('/');
    }, [level, playerScore, computerScore, navigate, scoreHistories]);    

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
            const index = level === 'Easy' ? getEasyComputerMove(prevSquares) : 
                          level === 'Medium' ? getMediumComputerMove(prevSquares) : 
                          level === 'Hard' ? getHardComputerMove(prevSquares) : null;
            if (index === undefined || index === null) {
                return prevSquares;
            }
        
            const newSquares = prevSquares.slice();
            newSquares[index] = 'O';
            return newSquares;
        });
    
    }, [turn, level, getEasyComputerMove, getMediumComputerMove, getHardComputerMove]);    

    const handleClickSquare = useCallback((index: number) => {
        if (turn !== 'Player' || squares[index] !== null) return;
    
        const newSquares = squares.slice();
        newSquares[index] = 'X';
        setSquares(newSquares);
        setTurn('Computer');
    }, [turn, squares]);        
    
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

    useEffect(() => {
        if (scoreHistories !== null) {
            const lastScore = scoreHistories.reverse().find((item) => item.level === level);
            if (lastScore) {
                setPlayerScore(lastScore.playerScore);
                setComputerScore(lastScore.computerScore);
            }
        }
    }, []);

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