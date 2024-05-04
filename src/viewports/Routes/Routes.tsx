import { privateRoutes, publicRoutes } from "./Routes.data";
import RoutesView from "./Routes.view"

const Routes: React.FC = () => {
    const privateRouteItems = privateRoutes;
    const publicRouteItems = publicRoutes;

    return <RoutesView
        privateRoutes={privateRouteItems}
        publicRoutes={publicRouteItems}
    />;
};

export default Routes;