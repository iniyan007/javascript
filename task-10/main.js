import { products } from "./products.js";
import {
  addToCart,
  getCart,
  removeFromCart,
  updateQty,
  calculateTotal
} from "./cart.js";

const productContainer = document.getElementById("products");
const cartContainer = document.getElementById("cart-items");
const cartPanel = document.getElementById("cart");

const searchInput = document.getElementById("search");
const filterSelect = document.getElementById("filter");

function displayProducts(list) {
  productContainer.innerHTML = "";

  list.forEach(p => {
    const div = document.createElement("div");
    div.classList.add("card");

    div.innerHTML = `
      <img src="${p.image}" class="card-img"/>
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <button>Add to Cart</button>
    `;

    div.querySelector("button").onclick = () => {
      addToCart(p);
      updateCartUI();
    };

    productContainer.appendChild(div);
  });
}

function updateCartUI() {
  const cart = getCart();
  cartContainer.innerHTML = "";

  cart.forEach(item => {
    const div = document.createElement("div");
    div.classList.add("cart-item");

    div.innerHTML = `
      <span>${item.name} (${item.qty})</span>
      <div>
        <button class="btn">-</button>
        <button class="btn">+</button>
        <button class="btn">x</button>
      </div>
    `;

    const [minus, plus, remove] = div.querySelectorAll("button");

    minus.onclick = () => {
      if (item.qty > 1) updateQty(item.id, item.qty - 1);
      updateCartUI();
    };

    plus.onclick = () => {
      updateQty(item.id, item.qty + 1);
      updateCartUI();
    };

    remove.onclick = () => {
      removeFromCart(item.id);
      updateCartUI();
    };

    cartContainer.appendChild(div);
  });

  const totals = calculateTotal();
  document.getElementById("subtotal").textContent = totals.subtotal;
  document.getElementById("tax").textContent = totals.tax;
  document.getElementById("total").textContent = totals.total;

  document.getElementById("cart-count").textContent = cart.length;
}

searchInput.addEventListener("input", filterProducts);
filterSelect.addEventListener("change", filterProducts);

function filterProducts() {
  const search = searchInput.value.toLowerCase();
  const category = filterSelect.value;

  const filtered = products.filter(p => {
    return (
      p.name.toLowerCase().includes(search) &&
      (category === "all" || p.category === category)
    );
  });

  displayProducts(filtered);
}

document.getElementById("cart-btn").onclick = () => {
  cartPanel.classList.toggle("hidden");
};

document.getElementById("close-cart").onclick = () => {
  cartPanel.classList.add("hidden");
};

displayProducts(products);
updateCartUI();