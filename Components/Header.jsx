import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <>
            <nav className="navbar navbar-expand bg-light border-bottom">
                <div className="container">
                    <span className="navbar-brand">🎬 MOVIE CINEMA 🎬 (by Gianluca)</span>
                    <div className="navbar-nav gap-2">
                        <NavLink className="nav-link" to="/">
                            Home
                        </NavLink>

                        <NavLink className="nav-link" to="/products">
                            Movies 📽
                        </NavLink>
                    </div>
                </div>
            </nav>

        </>
    )
};

