import './hero.css'
import Image from '../assets/hero-img.png'

const Hero = () => {

    return (
        <div className="hero">
            <div className="text-section">
                <h1 className="title">Get the knowledge you need here!</h1>
                <p className="title-suffix">The Subheading</p>
                <div className="main-btn-div"><a href="#" className="main-btn">All Courses</a></div>
            </div>

            <div className="img-section"><img className='hero-img' src={Image} alt="Books" /></div>
        </div>
    )
}

export default Hero