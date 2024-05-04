import { memo } from "react";
import { GradientModalProps } from "./GradientModal.type";

const GradientModalView: React.FC<GradientModalProps> = ({ content, onOkayClick }) => (
    <section className="relative">
        <div className="absolute h-screen w-full top-0 bottom-0 left-0 right-0 bg-gray-900 bg-opacity-50 z-20"></div>
        <div className="fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-30">
            <div className="relative inline-flex">
                <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-blue-500 via-teal-500 to-pink-500 rounded-lg blur-sm group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                <div className="relative inline-flex items-center justify-center px-12 py-6 font-semibold text-white text-sm transition-all duration-200 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 tracking-wide">
                    <div className="flex flex-col items-center gap-4">
                        {content}
                        <button className="px-4 py-2 font-medium rounded-lg bg-blue-500 w-full text-xs" onClick={onOkayClick}>Okayy</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default memo(GradientModalView);