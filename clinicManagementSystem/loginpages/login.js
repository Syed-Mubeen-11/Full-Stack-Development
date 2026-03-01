let message=document.getElementById("c-msg");
let arr=[
    document.getElementById("e-mail"),
    document.getElementById("passw")
];
let errors=[
    "Please Enter Email",
    "Please Enter Password"
];
function validate(){
for(let i=0;i<arr.length;i++){
    if(arr[i].value===""){
        message.innerText=errors[i];
        return;
    }
}
let users=JSON.parse(localStorage.getItem("users"));
if(!users){
    message.innerText="No user found please signup first";
    return;
}
for(let i=0;i<users.length;i++){
    if(users[i].email===arr[0].value && users[i].password==arr[1].value){
        message.innerText="Login Sucessfull";
        window.location.href = "../homepages/home.html";
            return;
    }
}
message.innerText="Invalid email or password"
}