    import './Navbar.css';
    import electronics from '../assets/electronics.jpeg';
    import fashion from '../assets/fashion.jpeg';
    import mobiles from '../assets/mobiles.jpeg';
    import tvs from '../assets/tvs.jpeg';
    import home from '../assets/home.jpeg';
    import home1 from '../assets/home1.jpeg'
    import { Link } from 'react-router-dom';
    function Navbar(){
        return(
            <>
            <nav>
            <div className="menu-items">
                <div className='boxes'>
                <Link to="/home">
                <img src={home1} alt="electronics"/>
                <p className='menu'>Home</p>
                </Link>
                </div>
                <div className='boxes'>
                    <Link to="/electronics">
                    <img src={electronics} alt="electronics"/>
                    <p className='menu'>Electronics</p>
                    </Link>
                </div>
                <div className='boxes'>
                    <Link to="/fashion">
                    <img src={fashion} alt="Fashion"/>
                    <p className='menu'>Fashion</p>
                    </Link>
                </div>
                <div className='boxes'>
                    <Link to="/mobiles">
                    <img src={mobiles} alt="Mobiles"/>
                    <p className='menu'>Mobiles & Tablets</p>
                    </Link>
                </div>
                <div className='boxes'>
                    <Link to="/tvs&appliances">
                    <img src={tvs} alt="tvs"/>
                    <p className='menu'>TVs and Appliances</p>
                    </Link>
                </div>
                <div className='boxes'>
                    <Link to="/furniture">
                    <img src={home} alt="Home"/>
                    <p className='menu'>Home and Furniture</p>
                    </Link>
                </div>
            </div>
            </nav>
            </>
        )
    }
    export default Navbar;