import { NavLink } from "react-router-dom";
import { Avatar, Popover, Button } from "antd";
import { h } from "../../help/help";
import { TOKEN, USER_LOGIN } from "../../api/baseApi";
import { useState } from "react";
import { UserLoginType } from "../../redux/slices/userSlice";
import { navigate } from "../../App";

type Props = {};
function Header({}: Props) {
    const [open, setOpen] = useState(false);

    const contentUser = (name: string) => {
        return (
            <div className="">
                <div className="">
                    <Button
                        type="text"
                        style={{ width: "100%" }}
                        onClick={() => {
                            hide()
                            navigate("/profile");
                        }}
                    >
                        {name}
                    </Button>
                </div>
                <div className="">
                    <Button type="text" style={{ width: "100%" }} onClick={() => { 
                        h.localStorage.remove(USER_LOGIN)
                        h.localStorage.remove(TOKEN)
                        hide()
                        navigate("/home");
                    }}>
                        Đăng xuất
                    </Button>
                </div>
            </div>
        );
    };

    const hide = () => {
        setOpen(false);
    };

    const handleOpenChange = (newOpen: boolean) => {
        setOpen(newOpen);
    };
    const renderUser = () => {
        const userLogin: UserLoginType = h.localStorage.get(USER_LOGIN);
        if (userLogin) {
            return (
                <>
                    <Popover
                        content={contentUser(userLogin?.email)}
                        trigger="click"
                        open={open}
                        onOpenChange={handleOpenChange}
                    >
                        <Avatar
                            src={"https://picsum.photos/200"}
                            style={{ cursor: "pointer" }}
                        />
                    </Popover>
                </>
            );
        }
        return (
            <>
                <NavLink to={"/login"}>
                    <button className="btn btn-outline-primary">Đăng nhập</button>
                </NavLink>
                <NavLink to={"/register"}>
                    <button className="btn btn-outline-primary">Đăng ký</button>
                </NavLink>
            </>
        );
    };
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <NavLink to={"/home"} className="navbar-brand">
                    Navbar
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink
                                to={"/home"}
                                className={({ isActive }) => {
                                    return isActive ? `nav-link active` : `nav-link`;
                                }}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to={"/detail"}
                                className={({ isActive }) => {
                                    return isActive ? `nav-link active` : `nav-link`;
                                }}
                            >
                                Detail
                            </NavLink>
                        </li>

                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Dropdown
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Action
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Another action
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Something else here
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">Disabled</a>
                        </li>
                    </ul>
                    <div className="d-flex gap-2 align-items-center">
                        <NavLink to={"/search"}>
                            <button className="btn btn-outline-success">Search</button>
                        </NavLink>
                        <NavLink to={"/carts"}>
                            <button className="btn btn-outline-secondary">Cart</button>
                        </NavLink>
                        {renderUser()}
                    </div>
                </div>
            </div>
        </nav>
    );
}
export default Header;
