export type Level = 'Easy' | 'Medium' | 'Hard';

export interface ScoreHistory {
    level: Level;
    playerScore: number;
    computerScore: number;
}