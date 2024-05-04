import { ScoreHistory } from "@/types/game";

export interface ScoreHistoriesProps {
    scoreHistories: ScoreHistory[];
    showScoreHistoriesModal: boolean;
    handleToggleShowScoreHistoriesModal: () => void;
}