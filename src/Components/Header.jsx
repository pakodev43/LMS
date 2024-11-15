import './header.css'

const Header = () => {

    return (
        <header className="header">
            <div className="logo-div">
                <p className="logo-text">Pakodev Academy</p>
            </div>

            {/* <button className="nav-toggle-btn opened" onClick={classList.toggle('opened')}></button> */}
            <button className="nav-toggle-btn"></button>
            {/* <button className="nav-toggle-btn opened"></button> */}

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

// var nav = document.getElementById('nav')
// var navToggle = document.getElementById('navToggle')

// navToggle.onclick = () => {
//     nav.classList.toggle('opened')
// }

export default Header