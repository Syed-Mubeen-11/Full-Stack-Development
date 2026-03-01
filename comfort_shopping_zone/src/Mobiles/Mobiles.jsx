import Galaxy_tab from "../assets/Galaxy_tab.jpeg";
import iphone16 from "../assets/iphone16.jpeg";
import iphone17 from "../assets/iphone17.jpeg";
import oneplus from "../assets/oneplus.jpeg";
import xiaomi from "../assets/xiaomi.jpeg";

function Mobiles(){
    return (
  <>
    <div className="features">

      <div className="feature-card">
        <img src={Galaxy_tab} alt="Samsung Galaxy Tab" />
        <h3>Samsung Galaxy Tab</h3>
        <p>Powerful tablet for work, study, and entertainment</p>
        <span className="price">₹29,999</span>
        <button className="cart-btn">Add to Cart</button>
      </div>

      <div className="feature-card">
        <img src={iphone16} alt="iPhone 16" />
        <h3>iPhone 16</h3>
        <p>Apple iPhone with advanced camera and performance</p>
        <span className="price">₹79,999</span>
        <button className="cart-btn">Add to Cart</button>
      </div>

      <div className="feature-card">
        <img src={iphone17} alt="iPhone 17" />
        <h3>iPhone 17</h3>
        <p>Next-gen iPhone with premium design and speed</p>
        <span className="price">₹89,999</span>
        <button className="cart-btn">Add to Cart</button>
      </div>

      <div className="feature-card">
        <img src={oneplus} alt="OnePlus Smartphone" />
        <h3>OnePlus Smartphone</h3>
        <p>Fast and smooth performance with OxygenOS</p>
        <span className="price">₹54,999</span>
        <button className="cart-btn">Add to Cart</button>
      </div>

      <div className="feature-card">
        <img src={xiaomi} alt="Xiaomi Smartphone" />
        <h3>Xiaomi Smartphone</h3>
        <p>High features at an affordable price</p>
        <span className="price">₹24,999</span>
        <button className="cart-btn">Add to Cart</button>
      </div>

    </div>
  </>
);

}
export default Mobiles;