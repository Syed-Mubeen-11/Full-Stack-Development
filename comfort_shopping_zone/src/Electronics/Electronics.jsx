import cleaner from "../assets/cleaner.jpeg";
import combo from "../assets/combo.jpeg";
import flask from "../assets/flask.jpeg";
import grinder from "../assets/grinder.jpeg";
import microwave from "../assets/microwave.jpeg";
import mixer from "../assets/mixer.jpeg";
import toaster from "../assets/toaster.jpeg";

function Electronics(){
    const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existing = cart.find(item => item.id === product.id);

    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ ...product, qty: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Item added to cart");
  };
    return(
        <>
            <div className="features">
            <div className="feature-card">
                <img src={cleaner} alt="cleaner" />
                <h3>Vaccum Cleaner</h3>
                <p>Bajaj Vaccum Cleaner makes your home clean </p>
                <span className="price">₹12,999</span>
                <button className="cart-btn" 
                onClick={() =>
                        addToCart({
                        id: 1,
                        name: "Vacuum Cleaner",
                        price: 12999
                        })
                    }>Add to Cart</button>
            </div>

            <div className="feature-card">
                <img src={combo} alt="combo" />
                <h3>Mixer and Boiler</h3>
                <p>Heater, Boiler, Mixer,Grinder</p>
                <span className="price">₹19,999</span>
                <button className="cart-btn"
                onClick={() =>
                    addToCart({
                    id: 2,
                    name: "Mixer and Boiler",
                    price: 19999
                    })
                }>Add to Cart</button>
            </div>

            <div className="feature-card">
                <img src={flask} alt="flask" />
                <h3>Flask and Toaster</h3>
                <p>Flask and Bread Toaster</p>
                <span className="price">₹29,999</span>
                <button className="cart-btn">Add to Cart</button>
            </div>

            <div className="feature-card">
                <img src={grinder} alt="grinder" />
                <h3>Grinder</h3>
                <p>Makes you materials so smooth</p>
                <span className="price">₹6,990</span>
                <button className="cart-btn">Add to Cart</button>
            </div>

            <div className="feature-card">
                <img src={microwave} alt="oven" />
                <h3>Microwave</h3>
                <p>Get your hot food instantly with oven</p>
                <span className="price">₹49,999</span>
                <button className="cart-btn">Add to Cart</button>
            </div>

            <div className="feature-card">
                <img src={mixer} alt="Mixer" />
                <h3>Mixer</h3>
                <p>Mixer with three jars</p>
                <span className="price">₹12,999</span>
                <button className="cart-btn">Add to Cart</button>
            </div>

            <div className="feature-card">
                <img src={toaster} alt="toaster" />
                <h3>Bread Toaster</h3>
                <p>Less electricity consume Toaster</p>
                <span className="price">14,999</span>
                <button className="cart-btn">Add to Cart</button>
            </div>

            

        </div>
        </>
    )
}
export default Electronics;