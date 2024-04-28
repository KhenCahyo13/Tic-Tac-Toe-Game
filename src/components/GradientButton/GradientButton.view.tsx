import { memo } from "react";
import { GradientButtonProps } from "./GradientButton.type";

const GradientButtonView: React.FC<GradientButtonProps> = ({ label, onClick }) => (
    <div className="relative inline-flex">
        <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-blue-500 via-teal-500 to-pink-500 rounded-lg blur-sm group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
        <button className="relative inline-flex items-center justify-center px-8 py-4 font-semibold text-white text-sm transition-all duration-200 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 tracking-wide" onClick={onClick}>{label}</button>
    </div>
);

export default memo(GradientButtonView);