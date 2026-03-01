import {Link, useNavigate} from "react-router-dom";
import "./Login.css"
import { useState } from "react";
function Signup()
{
   const [message,setMessage]=useState("")
   const navigate=useNavigate();
   const [data, setdata]=useState({
    name:"",
    email:"",
    password:"",
    confirm:""
   });
    
   const handleEvent=(e)=>{
    setdata({
        ...data,[e.target.name]:e.target.value
    });
   }

   const signup=(e)=>{
    e.preventDefault();
    if(data.password!==data.confirm){
        setMessage("Password and Confirm Password do not match")
        return;
    }
    localStorage.setItem("user", JSON.stringify(data));
    setMessage("Signup Sucessful!")
    setTimeout(()=>{
        navigate("/login");
    },1000)
    
   };
    return(
        <>
        <div className="login">
            <div className="login-box">
            <form onSubmit={signup}>
            <h3>Signup</h3>
                <p className="name">Username</p>
                <input type="text" name="name" placeholder="Enter your name" onChange={handleEvent}/>
                <p className="name">Email</p>
                <input type="email" name="email" placeholder="Enter your email" onChange={handleEvent}/>
                <p className="name">Password</p>
                <input type="password" name="password" placeholder="Enter your password" onChange={handleEvent}/>
                <p className="name">Confirm Password</p>
                <input type="password" name="confirm" placeholder="Enter your password" onChange={handleEvent}/><br/>
                <button type="submit">Sign Up</button>
                <p className="message">{message}</p>
                 <p id="valid">Already Have an account?<Link to="/login">Login</Link></p>
            </form>
            </div>
           
        </div>
        </>
    )
}
export default Signup;