import "./Header.css";

function Header() {
    return (
        <header className="header">
            <div className="header-logo">🌿 Student Directory</div>
            <nav className="header-nav">
                <a href="/" className="nav-link active">
                    Home
                </a>
                <a href="/about" className="nav-link">
                    About
                </a>
            </nav>
        </header>
    );
}

export default Header;
