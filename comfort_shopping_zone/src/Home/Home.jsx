import './Home.css';
import dresses from '../assets/dresses.webp';
import mobiles from '../assets/mobiles.webp';
import electronics from '../assets/electronics.jpeg';
import tvs from '../assets/tvs.jpeg';
import home from '../assets/home.jpg';
import { Link } from "react-router-dom";
function Home(props){
    return (
        <>
        <div className="adv">
            <h1>Welcome to Comfort Zone Shopping {props.name}</h1>
            <p>Your one-stop online shopping destination</p>
        </div>
        <div className="features">
            <div class="feature-card">
                <Link to="/fashion">
                <img src={dresses} alt='fashion'/>
                </Link>
                <h3>Fashion</h3>
                <p>Clothing, footwear & accessories</p>
            </div>
            <div className="feature-card">
                <Link to="/mobiles">
                <img src={mobiles} alt='mobiles'/>
                </Link>
                <h3>Mobiles & Tablets</h3>
                <p>Latest smartphones & gadgets</p>
            </div>
            <div className="feature-card">
                <Link to="/electronics">
                <img src={electronics} alt='elctronics'/>
                </Link>
                <h3>Electronics</h3>
                <p>Laptops, cameras & devices</p>
            </div>
            <div className="feature-card">
                <Link to="/tvs&appliances">
                <img src={tvs} alt='tvs'/>
                </Link>
                <h3>TV & Appliances</h3>
                <p>Televisions, ACs & refrigerators</p>
            </div>
            <div className="feature-card">
                <Link to="/furniture">
                <img src={home} alt='home'/>
                </Link>
                <h3>Home & Furniture</h3>
                <p>Furniture & home décor</p>
            </div>
        </div>
    </>
    )
}
export default Home;