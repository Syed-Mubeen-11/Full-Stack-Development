import './Ads.css';
import banner from "../assets/banner.jpeg";
import banner2 from "../assets/banner2.jpeg";
function Ads(){
    return(
        <>
        <div className='ads'>
          <div className='banner'>
          <img src={banner} alt='sales'/>
          </div>
          <div className='banners'>
            <img src={banner2} alt="sale" />
          </div>
        </div>
        </>
    )
}
export default Ads;