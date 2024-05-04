import { GradientButtonProps } from "./GradientButton.type";
import GradientButtonView from "./GradientButton.view"

const GradientButton: React.FC<GradientButtonProps> = ({ label, onClick }) => {
    return <GradientButtonView
        label={label}
        onClick={onClick}
    />;
};

export default GradientButton;