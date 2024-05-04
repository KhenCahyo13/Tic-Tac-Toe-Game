import { GradientHeadingProps } from "./GradientHeading.type";
import GradientHeadingView from "./GradientHeading.view";

const GradientHeading: React.FC<GradientHeadingProps> = ({ text }) => {
    return <GradientHeadingView
        text={text}
    />;
};

export default GradientHeading;