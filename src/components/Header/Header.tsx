import { NavLink } from "react-router-dom";

type Props = {};
function Header({}: Props) {
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
                    <div className="d-flex gap-2">
                        <NavLink to={"/search"}>
                            <button className="btn btn-outline-success">Search</button>
                        </NavLink>
                        <NavLink to={"/carts"}>
                            <button className="btn btn-outline-secondary">Cart</button>
                        </NavLink>
                        <NavLink to={"/login"}>
                            <button className="btn btn-outline-primary">Đăng nhập</button>
                        </NavLink>
                        <NavLink to={"/register"}>
                            <button className="btn btn-outline-primary">Đăng ký</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}
export default Header;
