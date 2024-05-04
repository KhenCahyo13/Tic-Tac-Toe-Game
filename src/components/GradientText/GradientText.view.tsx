import { memo } from "react";
import { GradientTextProps } from "./GradientText.type";

const GradientTextView: React.FC<GradientTextProps> = ({ text, size }) => (
    <div className={`mx-auto relative ${size === 'xs' ? 'text-xs' : size === 'sm' ? 'text-sm' : size === 'base' ? 'text-base' : size === 'lg' ? 'text-lg' : size === 'xl' ? 'text-xl' : 'text-sm'}`}>
        <span className={`absolute inset-0 z-0 border w-fit bg-gradient-to-r blur-xl from-blue-500 via-teal-500 to-pink-500 bg-clip-text box-content font-semibold text-transparent select-none`}>{text}</span>
        <p className={`relative z-10 bg-gradient-to-r from-blue-500 via-teal-500 to-pink-500 bg-clip-text font-semibold text-transparent tracking-widest`}>{text}</p>
    </div>
);

export default memo(GradientTextView);