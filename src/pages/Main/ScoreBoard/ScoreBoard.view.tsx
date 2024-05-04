import { memo } from "react";

const ScoreBoardView: React.FC = () => (
    <div className="flex items-center justify-center gap-8">
        <div className="p-px rounded-lg bg-gradient-to-r from-blue-500 via-teal-500 to-pink-500 cursor-pointer">
            <div className="flex items-center justify-center px-8 py-4 text-sm tracking-wide rounded-lg">
                <p className="bg-gradient-to-r from-blue-500 via-teal-500 to-pink-500 text-transparent bg-clip-text tracking-wide">
                    1
                </p>
            </div>
        </div>
        <div className="p-px rounded-lg bg-gradient-to-r from-blue-500 via-teal-500 to-pink-500 cursor-pointer">
            <div className="flex items-center justify-center px-8 py-4 text-sm tracking-wide rounded-lg">
                <p className="bg-gradient-to-r from-blue-500 via-teal-500 to-pink-500 text-transparent bg-clip-text tracking-wide">
                    2
                </p>
            </div>
        </div>
    </div>
);

export default memo(ScoreBoardView);