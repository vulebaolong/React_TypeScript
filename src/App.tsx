import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import Carts from "./pages/Carts/Carts";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Detail from "./pages/Detail/Detail";

function App() {

    return (
        <>
            <Routes>
                {/* HOME LAYOUT */}
                <Route element={<HomeLayout />}>
                    <Route index element={<Home />} />
                    <Route path="home" element={<Home />} />
                    <Route path="search" element={<Search />} />
                    <Route path="carts" element={<Carts />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="detail/:id" element={<Detail />} />
                </Route>

                {/* OTHER */}
                <Route path="*" element={<Navigate to={"/"} />} />
            </Routes>
        </>
    );
}

export default App;
