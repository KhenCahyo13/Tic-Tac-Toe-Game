import { GradientModalProps } from "./GradientModal.type";
import GradientModalView from "./GradientModal.view";

const GradientModal: React.FC<GradientModalProps> = ({ content, onOkayClick }) => {
    return <GradientModalView
        content={content}
        onOkayClick={onOkayClick}
    />;
};

export default GradientModal;