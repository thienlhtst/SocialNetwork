import { Route, Router, Routes, createBrowserRouter } from "react-router-dom";
import { MainLayout } from "./layout/mainLayout";
import { AuthLayout } from "./layout/authLayout";
import { Register } from "./components/login/child/register";
import { _header } from "./components/share/_header";
import { Login } from "./components/login/login";

export function RouteConfig () {

    return(
        <Routes>
            <Route path="/home" element={<MainLayout/>}/>
            <Route path="/" element={<AuthLayout/>}>
                <Route path="login" element={<Login/>}/>
                <Route path="register" element={<Register/>}/>
            </Route>
        </Routes>
    )
}