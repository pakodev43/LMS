import './header.css'

const Header = () => {

    return (
        <header className="header">
            <div className="logo-div">
                <p className="logo-text">Zahid Accademy</p>
            </div>

            <nav className="top-nav">
                <ul>
                    <li><a href="#" className="top-nav-link">Home</a></li>
                    <li><a href="#" className="top-nav-link">Courses</a></li>
                    <li><a href="#" className="top-nav-link">Log In</a></li>
                    <li><a href="#" className="top-nav-link">Sign Up</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header