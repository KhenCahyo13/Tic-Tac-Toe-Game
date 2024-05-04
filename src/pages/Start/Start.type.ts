import { Level } from "@/types/game";

export interface StartViewProps {
    level: Level;
    handleChangeLevel: (level: Level) => void;
    handleStartGame: () => void;
}