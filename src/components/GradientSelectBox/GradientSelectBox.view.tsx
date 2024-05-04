import { memo } from "react";
import { GradientSelectBoxProps } from "./GradientSelectBox.type";

const GradientSelectBox: React.FC<GradientSelectBoxProps> = ({ label, onClick }) => (
    <div className="p-px rounded-lg bg-gradient-to-r from-blue-500 via-teal-500 to-pink-500 cursor-pointer" onClick={onClick}>
        <div className="flex items-center justify-center p-4 text-sm tracking-wide rounded-lg">
            <p className="bg-gradient-to-r from-blue-500 via-teal-500 to-pink-500 text-transparent bg-clip-text tracking-wide">{label}</p>
        </div>
    </div>
);

export default memo(GradientSelectBox);