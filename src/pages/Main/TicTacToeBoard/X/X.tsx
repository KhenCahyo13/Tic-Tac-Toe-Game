import { XProps } from "./X.type";
import XView from "./XView";

const X: React.FC<XProps> = ({ uniqueKey }) => {
    return <XView
        uniqueKey={uniqueKey}
    />;
};

export default X;