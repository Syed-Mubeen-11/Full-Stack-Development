let cart = JSON.parse(localStorage.getItem("cartItems")) || [];
let container = document.getElementById("cart-container");

// function to render cart
function renderCart() {
  container.innerHTML = "";

  if (cart.length === 0) {
    container.innerHTML = "<p class='empty-cart'>Your cart is empty 🛒</p>";
    return;
  }

  cart.forEach(function (item) {
    let div = document.createElement("div");
    div.className = "cart-item";

    div.innerHTML = `
      <img src="${item.image}" width="80">
      <h4>${item.name}</h4>
      <p>₹${item.price}</p>
      <p>Qty: ${item.quantity}</p>
      <button class="remove-btn" data-name="${item.name}">Remove</button>
    `;

    container.appendChild(div);
  });
}

// remove item
container.addEventListener("click", function (event) {
  if (event.target.classList.contains("remove-btn")) {
    let nameToRemove = event.target.getAttribute("data-name");

    cart = cart.filter(item => item.name !== nameToRemove);
    localStorage.setItem("cartItems", JSON.stringify(cart));

    renderCart(); // re-render instead of reload
  }
});

// initial render
renderCart();
