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
                    <li><a href="#" className="footer-nav-link">Log In</a></li>
                    <li><a href="#" className="footer-nav-link">Sign Up</a></li>
                </ul>
            </nav>

            <div className="copyright-div"></div>

        </footer>
    )
}

export default Footer