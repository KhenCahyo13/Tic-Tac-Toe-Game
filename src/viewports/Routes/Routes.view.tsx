import { Suspense } from "react";
import { RoutesViewProps } from "./Routes.type";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HasStartGame from "../HasStartGame";

const RoutesView: React.FC<RoutesViewProps> = ({ privateRoutes, publicRoutes }) => (
    <Suspense fallback="Loading...">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/start" />} />
                {/* Map Private Routes */}
                {privateRoutes.map((item) => (
                    <Route
                        key={item.path}
                        path={item.path}
                        element={
                            <HasStartGame>
                                {item.element}
                            </HasStartGame>
                        }
                    />
                ))}
                {/* Map Public Routes */}
                {publicRoutes.map((item) => (
                    <Route
                        key={item.path}
                        path={item.path}
                        element={item.element}
                    />
                ))}
            </Routes>
        </BrowserRouter>
    </Suspense>
);

export default RoutesView;