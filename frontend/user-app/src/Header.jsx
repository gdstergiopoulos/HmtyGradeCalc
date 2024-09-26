import profilelogo from './assets/profile.svg';
function Header(){
    return(
        <>
        <header>
        <nav className="navbar">
            <div className="navbar-left">
                <a href="/" className="logo">HmtyGrade</a>
            </div>
            <div className="navbar-center">
                <ul className="nav-links">
                    <li>
                        <a href="/stats">Statistics</a>
                    </li>
                    <li>
                        <a href="/about">About Us</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <a href="/myprof"><img className="profileLogo" src={profilelogo} alt="profilepic"/></a>
            </div>
        </nav>
        </header>
        </>
    );
    
}

export default Header;