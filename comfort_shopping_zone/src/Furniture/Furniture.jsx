import table from "../assets/table.jpeg";
import sofaset from "../assets/sofaset.jpeg";
import sofa from "../assets/sofa.jpeg";
import dining from "../assets/dining.jpeg";
import chairs from "../assets/chairs.jpeg";
import bed from "../assets/bed.jpeg";
import seater from "../assets/seater.jpeg"
function Furniture(){
    return(
            <>
             <div className="features">
                <div className="feature-card">
                    <img src={table} alt="table" />
                    <h3>Dressing Table</h3>
                    <p>New Mordern Stylish attractive dressing table </p>
                    <span className="price">₹5999</span>
                    <button className="cart-btn">Add to Cart</button>
                </div>
    
                <div className="feature-card">
                    <img src={sofaset} alt="sofaset" />
                    <h3>Sofa</h3>
                    <p>Three seater Beautiful Sofa</p>
                    <span className="price">₹9999</span>
                    <button className="cart-btn">Add to Cart</button>
                </div>
    
                <div className="feature-card">
                    <img src={dining} alt="dining" />
                    <h3>Dining Table</h3>
                    <p>6 seater Dining Table</p>
                    <span className="price">₹5999</span>
                    <button className="cart-btn">Add to Cart</button>
                </div>
    
                <div className="feature-card">
                    <img src={sofa} alt="Sofa" />
                    <h3>Sofa</h3>
                    <p>Best Sofa for Small families</p>
                    <span className="price">₹6,990</span>
                    <button className="cart-btn">Add to Cart</button>
                </div>
    
                <div className="feature-card">
                    <img src={chairs} alt="Chairs" />
                    <h3>Sofa Chairs</h3>
                    <p>New Mordern Comfortable sofa chairs</p>
                    <span className="price">₹899</span>
                    <button className="cart-btn">Add to Cart</button>
                </div>

                <div className="feature-card">
                    <img src={bed} alt="Bed" />
                    <h3>Mattress</h3>
                    <p>Mattress Along with the pillows</p>
                    <span className="price">₹12,999</span>
                    <button className="cart-btn">Add to Cart</button>
                </div>

                <div className="feature-card">
                    <img src={seater} alt="winter clothes" />
                    <h3>Sofa and Chairs</h3>
                    <p>7 Seater Sofa</p>
                    <span className="price">25,999</span>
                    <button className="cart-btn">Add to Cart</button>
                </div>

                
    
            </div>
            </>
        )
    }
    
export default Furniture;