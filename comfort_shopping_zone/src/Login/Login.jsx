import { Link, useNavigate } from "react-router-dom";
import "./Login.css"
import { useState } from "react";
function Login()
{
    const [message,setMessage]=useState("");
    const navigate=useNavigate();
    const [userdata,setuserdata]=useState({
            email:"",
            password:""
        });
    const Handle=(e)=>{
        setuserdata({
            ...userdata,[e.target.name]:e.target.value
        })
    }
    const login=(e)=>{
        e.preventDefault()
        const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      setMessage("No account found. Please sign up.");
      return;
    }

    const user = JSON.parse(storedUser);
    

    if (
      userdata.email === user.email &&
      userdata.password === user.password
    ) {
        localStorage.setItem("loggedUser", JSON.stringify(user));
      setMessage("Login successful!");
       setTimeout(() => {
           navigate("/home")
            },1000);
    }
    else{
        setMessage("Invalid email or password")
    }
};
    return(
        <>
        <div className="login">
            <div className="login-box">
            <form onSubmit={login}>
            <h3>Login</h3>
                <p className="name">Username</p>
                <input type="email" name="email"placeholder="Enter your email" onChange={Handle}/>
                <p className="name">Password </p>
                <input type="password" name="password"  placeholder="Enter your password" onChange={Handle}/><br/>
                <button type="submit">Login</button>
                <p className="message">{message}</p>
                 <p id="valid">Don't have an account?<Link to="/signup">Sign Up</Link></p>
                 </form>
            </div>
           
        </div>
        </>
    )
}
export default Login;