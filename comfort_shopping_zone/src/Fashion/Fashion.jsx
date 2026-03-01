import fork from "../assets/fork.jpeg";
import shirt from "../assets/shirt.jpeg";
import skirt from "../assets/skirt.jpeg";
import suit from "../assets/suit.jpeg";
import winter from "../assets/winter.jpeg";
function Fashion(){
    return(
        <>
         <div className="features">
            <div className="feature-card">
                <img src={fork} alt="fork" />
                <h3>Long Fork</h3>
                <p>Reyon Fabric </p>
                <span className="price">₹999</span>
                <button className="cart-btn">Add to Cart</button>
            </div>

            <div className="feature-card">
                <img src={shirt} alt="Shirt" />
                <h3>Shirt</h3>
                <p>cotton cloth Deep blue coloue</p>
                <span className="price">₹499</span>
                <button className="cart-btn">Add to Cart</button>
            </div>

            <div className="feature-card">
                <img src={skirt} alt="Skirt" />
                <h3>Skirt</h3>
                <p>Skirts for girls</p>
                <span className="price">₹699</span>
                <button className="cart-btn">Add to Cart</button>
            </div>

            <div className="feature-card">
                <img src={suit} alt="Suit" />
                <h3>Suit</h3>
                <p>Suits for men</p>
                <span className="price">₹6,990</span>
                <button className="cart-btn">Add to Cart</button>
            </div>

            <div className="feature-card">
                <img src={winter} alt="winter clothes" />
                <h3>Winter Clothes</h3>
                <p>Sweater for children</p>
                <span className="price">₹299</span>
                <button className="cart-btn">Add to Cart</button>
            </div>

        </div>
        </>
    )
}
export default Fashion;