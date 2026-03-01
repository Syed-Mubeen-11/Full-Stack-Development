// Navbar login/logout logic
const logoutBtn = document.getElementById("logoutBtn");
const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");
const currentUser = JSON.parse(localStorage.getItem("currentUser"));

if(currentUser){
  if(loginBtn) loginBtn.style.display="none";
  if(signupBtn) signupBtn.style.display="none";
  if(logoutBtn) logoutBtn.style.display="inline-block";
}

logoutBtn?.addEventListener("click",()=>{
  localStorage.removeItem("currentUser");
  location.reload();
});