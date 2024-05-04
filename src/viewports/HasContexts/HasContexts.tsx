import { HasContextsProps } from "./HasContexts.type";
import HasContextsView from "./HasContexts.view";

const HasContexts: React.FC<HasContextsProps> = ({ children }) => {
    return <HasContextsView
        children={children}
    />;
};

export default HasContexts;