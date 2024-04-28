import { memo } from "react";
import { GradientHeadingProps } from "./GradientHeading.type";

const GradientHeadingView: React.FC<GradientHeadingProps> = ({ text }) => (
    <>
        <span className="absolute mx-auto py-4 border w-fit bg-gradient-to-r blur-xl from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-3xl box-content font-bold text-transparent select-none">{text}</span>
        <h1 className="relative top-0 w-fit h-auto py-4 bg-gradient-to-r from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-3xl font-bold text-transparent select-auto tracking-widest">{text}</h1>
    </>
);

export default memo(GradientHeadingView);