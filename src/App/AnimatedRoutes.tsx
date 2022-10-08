import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Method from "../pages/Method";

function AnimatedRoutes() {
    const location = useLocation();
    return(
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/method" element={<Method />}/>
        </Routes>
    );
}

export default AnimatedRoutes;