import { Level, ScoreHistory } from "@/types/game";

export interface StartViewProps {
    scoreHistories: ScoreHistory[];
    level: Level;
    showScoreHistoriesModal: boolean;
    handleToggleShowScoreHistoriesModal: () => void;
    handleChangeLevel: (level: Level) => void;
    handleStartGame: () => void;
}