import { Link } from 'react-router-dom';
import './About.css';
function About(){
    return(
        <>
        <div className="about-container">
      <h1>About Comfort Zone</h1>
      <p className="about-text">
        Comfort Zone is your trusted online shopping destination, bringing you
        the best products across fashion, electronics, home essentials, and
        more — all at affordable prices.
      </p>

      <div className="about-sections">
        <div className="about-card">
          <h3>Our Mission</h3>
          <p>
            To make online shopping easy, reliable, and enjoyable for everyone.
          </p>
        </div>

        <div className="about-card">
          <h3>Our Vision</h3>
          <p>
            To become a leading e-commerce platform known for quality and trust.
          </p>
        </div>

        <div className="about-card">
          <h3>Why Choose Us?</h3>
          <p>
            Wide product range, secure shopping, fast delivery, and great support.
          </p>
        </div>
      </div>
    </div>
        </>
    )
}
export default About;