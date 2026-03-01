import { Route, Routes} from "react-router-dom";
import About from "../About/About";
import Contact from "../Contact/Contact"
import Home from "../Home/Home";
import Login from "../Login/Login";
import Signup from "../Login/signup";
import Tvs from "../Tvs_Apps/Tvs";
import Fashion from "../Fashion/Fashion";
import Electronics from "../Electronics/Electronics";
import Mobiles from "../Mobiles/Mobiles";
import Furniture from "../Furniture/Furniture";
import Addcart from "../Cart/Cart";
function Links(){
    return(
        <>
            <Routes>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/signup" element={<Signup/>}></Route>
                <Route path="/tvs&appliances" element={<Tvs/>}></Route>
                <Route path="/fashion" element={<Fashion/>}></Route>
                <Route path="/electronics" element={<Electronics/>}></Route>
                <Route path="/mobiles" element={<Mobiles/>}></Route>
                <Route path="/furniture" element={<Furniture/>}></Route>
                <Route path="/cart" element={<Addcart/>}></Route>
            </Routes>
        </>
    )
}
export default Links