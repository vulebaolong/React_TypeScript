import "./App.css";
import { Navigate, NavigateFunction, Route, Routes, useNavigate } from "react-router-dom";
import HomeLayout from "./layouts/HomLayout/HomeLayout";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import Carts from "./pages/Carts/Carts";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Detail from "./pages/Detail/Detail";
import UserLayout from "./layouts/UserLayout/UserLayout";
import Demo from "./components/Demo";
import { ConfigProvider, theme } from "antd";
import Profile from "./pages/Profile/Profile";

export let navigate: any = null;
function App() {
    navigate = useNavigate();
    return (
        <>
            <ConfigProvider
                theme={{
                    algorithm: theme.darkAlgorithm,
                }}
            >
                {/* <Demo></Demo> */}
                <Routes>
                    {/* HOME LAYOUT */}
                    <Route element={<HomeLayout />}>
                        <Route index element={<Home />} />
                        <Route path="home" element={<Home />} />
                        <Route path="search" element={<Search />} />
                        <Route path="carts" element={<Carts />} />
                        <Route path="detail/:id" element={<Detail />} />
                        <Route path="profile" element={<Profile />} />
                    </Route>

                    {/* USER LAYOUT */}
                    <Route element={<UserLayout />}>
                        <Route path="login" element={<Login />} />
                        <Route path="register" element={<Register />} />
                    </Route>

                    {/* OTHER */}
                    <Route path="*" element={<Navigate to={"/"} />} />
                </Routes>
            </ConfigProvider>
        </>
    );
}

export default App;
