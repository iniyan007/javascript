let cart = JSON.parse(localStorage.getItem("cart")) || [];

export function getCart() {
  return cart;
}

export function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function addToCart(product) {
  const item = cart.find(p => p.id === product.id);

  if (item) {
    item.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  saveCart();
}

export function removeFromCart(id) {
  cart = cart.filter(p => p.id !== id);
  saveCart();
}

export function updateQty(id, qty) {
  const item = cart.find(p => p.id === id);
  if (item) {
    item.qty = qty;
  }
  saveCart();
}

export function calculateTotal() {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const tax = subtotal * 0.1;
  return { subtotal, tax, total: subtotal + tax };
}