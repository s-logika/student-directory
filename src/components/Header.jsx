import { Link, useLocation } from "react-router-dom";
import "./Header.css";

function Header() {
    const location = useLocation();

    return (
        <header className="header">
            <div className="header-logo">🌿 Student Directory</div>
            <nav className="header-nav">
                <Link
                    to="/"
                    className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
                >
                    Home
                </Link>
                <Link
                    to="/about"
                    className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}
                >
                    About
                </Link>
            </nav>
        </header>
    );
}

export default Header;
