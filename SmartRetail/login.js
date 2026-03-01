// let email=document.getElementById("login-email").value;
// // console.log(email)
// let password=document.getElementById("login-password").value;
// // console.log(password);
let forms=document.getElementsByClassName("auth-form");
// console.log(forms)
// console.log(message)
forms[0].addEventListener("submit", function (event) {
  event.preventDefault();
  // console.log("Form submitted");
  let email=document.getElementById("login-email").value;
  let password=document.getElementById("login-password").value;
  let message=document.getElementsByClassName("form-message")[0];
  console.log(message)
  let storedemail=localStorage.getItem("email");
  let storedpasswrod=localStorage.getItem("password");
  if(email===""){
    message.innerText="Please Enter Email"
  }
 else if (password===""){
    message.innerText="Please Enter the password";
  }
  else if (email===storedemail && password===storedpasswrod){
    message.innerText="Login Sucessful";
    localStorage.setItem("isLoggedIn","true")
    setTimeout(function(){
        window.location.href="index.html"
    },2000)
  }
  else{
    message.innerText="Invalid Credentials or signup first"
  }
 });
 