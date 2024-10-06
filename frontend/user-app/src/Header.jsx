import profilelogo from './assets/profile.svg';
import logoutlogo from './assets/logout.svg';
function Header({loggedIn}){

    function handleLogout()
    {
        fetch("/api/auth/logout")
        .then(res => res.json())
        .then(data => {
            if(data.dbmsg === "Logged out successfully")
            {
                window.location.reload();
            }
        })
        .catch(err => console.error("Error logging out:", err));
    }

    return(
        <>
        <header>
        <nav className="navbar">
            <div className="navbar-left">
                <a href="/" className="logo">HMTYgrade</a>
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
                <a href="/myprof">
                    <span>{loggedIn}</span>
                    <img className="profileLogo" src={profilelogo} alt="profilepic"/>
                </a>
                <a href="/" onClick={handleLogout}>
                    {loggedIn? <img className="logoutLogo" src={logoutlogo} alt="logoutlogo"/>: <span></span>}
                </a>
            </div>
        </nav>
        </header>
        </>
    );
    
}

export default Header;