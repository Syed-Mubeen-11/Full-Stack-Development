import "./Tvs.css";
import tele from "../assets/tele.jpeg";
import washing from "../assets/washing.avif";
import fridge from "../assets/fridge.jpg";
import ac from "../assets/ac.jpeg";
import cleaner from "../assets/cleaner.jpeg";

function Tvs() {
    return (
        <>
            <div className="features">

                <div className="feature-card">
                    <img src={tele} alt="Television" />
                    <h3>Smart Television</h3>
                    <p>43” 4K Ultra HD Smart TV</p>
                    <span className="price">₹32,999</span>
                    <button className="cart-btn">Add to Cart</button>
                </div>

                <div className="feature-card">
                    <img src={washing} alt="Washing Machine" />
                    <h3>Washing Machine</h3>
                    <p>7 kg Fully Automatic</p>
                    <span className="price">₹18,499</span>
                    <button className="cart-btn">Add to Cart</button>
                </div>

                <div className="feature-card">
                    <img src={fridge} alt="Refrigerator" />
                    <h3>Refrigerator</h3>
                    <p>Double Door, 260 L</p>
                    <span className="price">₹24,999</span>
                    <button className="cart-btn">Add to Cart</button>
                </div>

                <div className="feature-card">
                    <img src={ac} alt="Air Conditioner" />
                    <h3>Air Conditioner</h3>
                    <p>1.5 Ton Split AC</p>
                    <span className="price">₹36,990</span>
                    <button className="cart-btn">Add to Cart</button>
                </div>

                <div className="feature-card">
                    <img src={cleaner} alt="Vacuum Cleaner" />
                    <h3>Vacuum Cleaner</h3>
                    <p>Robotic & Smart Cleaning</p>
                    <span className="price">₹14,299</span>
                    <button className="cart-btn">Add to Cart</button>
                </div>

            </div>
        </>
    );
}

export default Tvs;
