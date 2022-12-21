import {Navigate, Route, Routes} from "react-router-dom";
import MainLayout from "../pages/layout/MainLayout";
import Login from "../Login";
import Dashboard from "../pages/dashboard/Dashboard";

const ProtectRouter = ({children}: any) => {
    let token = localStorage.getItem("loansys_admin_token") || null;
    console.log("token:" + token);
    return token ? children : <Navigate to="/login"/>;
};

const Routers = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/" element={<MainLayout/>}>
                <Route
                    path="/"
                    element={
                        <ProtectRouter>
                            <Dashboard/>
                        </ProtectRouter>
                    }
                />
            </Route>
        </Routes>
    );
};

export default Routers;
