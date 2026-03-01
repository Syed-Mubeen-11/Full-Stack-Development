document.addEventListener("DOMContentLoaded", () => {
  const logoutBtn = document.getElementById("logoutBtn");
  const loginBtn = document.getElementById("loginBtn");
  const signupBtn = document.getElementById("signupBtn");

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  if(currentUser){
    loginBtn.style.display = "none";
    signupBtn.style.display = "none";
    logoutBtn.style.display = "inline-block";
  }

  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("currentUser");
    window.location.href = "login.html";
  });
});