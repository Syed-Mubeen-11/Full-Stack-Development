// import './Header.css';
// import logo from '../assets/logo.png';
// import Navbar from '../Navbar/Navbar';
// import { Link } from "react-router-dom";
// import Ads from "../Ads/Ads";


// function Header(){
//   return (
//     <>
//       <div className='header'>
//         <div className='logo'>
//           <img src={logo} alt="Comfort Zone"/>
//         </div>

//         <div className='searchbar'>
//           <input type="text" placeholder='Search for Products, Brands and More'/>
//           <button>🔍</button>
//         </div>

//         <div className='side-bar'>
//           <Link to="/login"><p>👤 Login</p></Link>
//           <p>🛒 Cart</p>
//           <Link to="/about">About Us</Link>
//           <Link to="/contact">Contact Us</Link>
//         </div>
//       </div>
//       <Ads />
//       <Navbar />
//     </>
//   );
// }

// export default Header;


import './Header.css';
import logo from '../assets/logo.png';
import Navbar from '../Navbar/Navbar';
import { Link, useLocation } from "react-router-dom";
import Ads from "../Ads/Ads";

function Header() {
  const location = useLocation();

  // Show Ads only on Home page
  const showAds = location.pathname === "/" || location.pathname === "/home";

  return (
    <>
      <div className='header'>
        <div className='logo'>
          <img src={logo} alt="Comfort Zone" />
        </div>

        <div className='searchbar'>
          <input type="text" placeholder='Search for Products, Brands and More' />
          <button>🔍</button>
        </div>

        <div className='side-bar'>
          <Link to="/login"><p>👤 Login</p></Link>
          <Link to="/cart"><p>🛒 Cart</p></Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
      </div>

      {/* 👇 Ads only on Home */}
      {showAds && <Ads />}

      {/* Navbar always visible */}
      <Navbar />
    </>
  );
}

export default Header;
