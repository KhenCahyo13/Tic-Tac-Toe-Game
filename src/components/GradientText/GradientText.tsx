import { GradientTextProps } from "./GradientText.type";
import GradientTextView from "./GradientText.view";

const GradientText: React.FC<GradientTextProps> = ({ text, size }) => {
    return <GradientTextView
        text={text}
        size={size}
    />;
};

export default GradientText;