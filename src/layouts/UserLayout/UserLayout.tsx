import { NavLink, Outlet } from "react-router-dom";
import style from "./UserLayout.module.css";

type Props = {};
function UserLayout({}: Props) {
    
    return (
        <section className={`${style.backgroundRadialGradient} `}>
            <div className="container d-flex ">
                <div className="row gx-5 align-items-center text-center text-lg-start ">
                    <div className="col-lg-6  mb-0" style={{ zIndex: 10 }}>
                        <NavLink to={"/home"} className="navbar-brand">
                            <h1>Navbar</h1>
                        </NavLink>
                        <h2
                            className="mb-5 mt-5 mt-lg-0 display-5 fw-bold ls-tight"
                            style={{ color: "hsl(218, 81%, 95%)" }}
                        >
                            The best offer <br />
                            <span style={{ color: "hsl(218, 81%, 75%)" }}>
                                for your business
                            </span>
                        </h2>
                        <p
                            className="mb-5 opacity-70"
                            style={{ color: "hsl(218, 81%, 85%)" }}
                        >
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Temporibus, expedita iusto veniam atque, magni tempora
                            mollitia dolorum consequatur nulla, neque debitis eos
                            reprehenderit quasi ab ipsum nisi dolorem modi. Quos?
                        </p>
                    </div>
                    <div className="col-lg-6  mb-0 position-relative">
                        <div
                            id={`${style.radiusShape1}`}
                            className="position-absolute rounded-circle shadow-5-strong"
                        />
                        <div
                            id={`${style.radiusShape2}`}
                            className="position-absolute shadow-5-strong"
                        />
                        <div className={`card ${style.bgGlass} rounder`}>
                            <div className="card-body px-4 py-5 px-md-5">
                                <Outlet />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default UserLayout;
