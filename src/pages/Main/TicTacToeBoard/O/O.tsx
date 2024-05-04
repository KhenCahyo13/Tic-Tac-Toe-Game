import { OProps } from "./O.type";
import OView from "./O.view";

const O: React.FC<OProps> = ({ uniqueKey }) => {
    return <OView
        uniqueKey={uniqueKey}
    />
};

export default O;