import { GradientSelectBoxProps } from "./GradientSelectBox.type";
import GradientSelectBoxView from "./GradientSelectBox.view";

const GradientSelectBox: React.FC<GradientSelectBoxProps> = ({ label, onClick }) => {
    return <GradientSelectBoxView
        label={label}
        onClick={onClick}
    />;
};

export default GradientSelectBox;