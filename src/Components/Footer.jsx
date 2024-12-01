import './footer.css'

const Footer = () => {

    return (
        <footer className="footer">

            <div className="logo-div">
                <p className="logo-text">Pakodev Academy</p>
            </div>

            <nav className="footer-nav">
                <ul>
                    <li><a href="#" className="footer-nav-link">Home</a></li>
                    <li><a href="#" className="footer-nav-link">Courses</a></li>
                    <li><a href="#" className="footer-nav-link">Library</a></li>
                    <li><a href="#" className="footer-nav-link">Vision</a></li>
                    <li><a href="#" className="footer-nav-link">Contacts</a></li>
                    <li><a href="#" className="footer-nav-link">About</a></li>
                    <li><a href="#" className="footer-nav-link">Log In</a></li>
                    <li><a href="#" className="footer-nav-link">Sign Up</a></li>
                </ul>
            </nav>

            <div className="copyright-div">&copy;2024 XYZ Academy</div>

        </footer>
    )
}

export default Footer