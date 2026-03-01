let message=document.getElementById("m-msg");
function validate(){
    let name=document.getElementById("name").value;
    let email=document.getElementById("mail").value;
    let password=document.getElementById("pass").value;
    let Cpassword=document.getElementById("Confirmpass").value;
    if(name===""){
        message.innerText="Please Enter name";
        return;
    }
    else if(email===""){
        message.innerText="Please Enter Email";
        return;
    }
    else if(password===""){
        message.innerText="Please create password";
        return;
    }
    else if(Cpassword===""){
        message.innerText="Please Enter confirm password";
        return;
    }
    else if(password!=Cpassword){
        message.innerText="password doesn't matched ! Re-enter your password";
        return;
    }

    else {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === email) {
            message.innerText = "User already exists with this email";
            return;
        }
    }
    let newUser = {
        name: name,
        email: email,
        password: password
    };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    message.innerText = "Successfully signed up. Please login.";
}

    
}
