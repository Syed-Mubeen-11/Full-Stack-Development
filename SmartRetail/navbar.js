let authLink = document.getElementById("authLink");

if (authLink) {
  let isLoggedIn = localStorage.getItem("isLoggedIn");

  if (isLoggedIn === "true") {
    authLink.innerText = "Logout";
    authLink.href = "#";

    authLink.addEventListener("click", function () {
      localStorage.removeItem("isLoggedIn");
      window.location.href = "login.html";
    });
  } else {
    authLink.innerText = "Login";
    authLink.href = "login.html";
  }
}
