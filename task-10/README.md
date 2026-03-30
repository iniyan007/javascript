# 🛒 E-Commerce Shopping Cart Application

## 📌 Overview

This project is a **full-featured eCommerce simulation** built using **vanilla JavaScript (ES6 modules)**. It allows users to browse products, add them to a cart, update quantities, and view dynamic pricing including tax calculations.

The application uses **localStorage** to persist cart data and ensures a smooth user experience with filtering, search, and responsive UI.

---

## 🚀 Features

### 🧾 Product Listing

* Dynamically displays products from a data source (`products.js`)
* Includes:

  * Product Image
  * Name
  * Price
  * Category

---

### 🛍️ Shopping Cart

* Add products to cart
* Increase/decrease quantity
* Remove items from cart
* Real-time cart updates

---

### 💾 State Management

* Cart state is managed using JavaScript
* Data persists using **localStorage**
* Cart is retained even after page refresh

---

### 💰 Price Calculation

* Subtotal calculation
* Tax (10%) applied dynamically
* Final total displayed

---

### 🔍 Search & Filter

* Search products by name
* Filter products by category:

  * Electronics
  * Clothing

---

### 📱 Responsive UI

* Works across different screen sizes
* Grid-based product layout
* Toggleable cart panel

---

## ⚙️ Modules Breakdown

### 📦 `products.js`

Contains static product data.

```js
export const products = [
  { id, name, price, category, image }
];
```

---

### 🛒 `cart.js`

Handles all cart operations.

#### Functions:

* `getCart()` → Returns current cart
* `saveCart()` → Saves cart to localStorage
* `addToCart(product)` → Adds or increments item
* `removeFromCart(id)` → Removes item
* `updateQty(id, qty)` → Updates quantity
* `calculateTotal()` → Returns subtotal, tax, total

---

### 🧠 `main.js`

Handles UI rendering and interactions.

#### Key Responsibilities:

* Display products
* Update cart UI
* Handle search & filtering
* Manage cart visibility

---

## 🔄 Workflow

### 1. Load Products

```js
displayProducts(products);
```

### 2. Add to Cart

```js
addToCart(product);
```

### 3. Update Cart UI

```js
updateCartUI();
```

### 4. Persist Data

```js
localStorage.setItem("cart", JSON.stringify(cart));
```

---

## 🧮 Price Calculation Logic

```js
const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
const tax = subtotal * 0.1;
const total = subtotal + tax;
```

---

## 🔍 Filtering Logic

```js
const filtered = products.filter(p => {
  return (
    p.name.toLowerCase().includes(search) &&
    (category === "all" || p.category === category)
  );
});
```

---

## 🎯 Key Concepts Used

* ES6 Modules (`import/export`)
* DOM Manipulation
* Event Handling
* Array Methods (`map`, `filter`, `reduce`)
* localStorage API
* Dynamic Rendering

---

## ⚠️ Error Handling (Suggestions for Improvement)

You can enhance robustness by adding:

* Input validation for quantity
* Handling missing product images
* Try-catch for localStorage parsing

Example:

```js
try {
  cart = JSON.parse(localStorage.getItem("cart")) || [];
} catch {
  cart = [];
}
```

---

## 🔥 Possible Enhancements

* ✅ Add discount/coupon system
* ✅ Add user authentication (JWT)
* ✅ Backend integration (Spring Boot / Node.js)
* ✅ Payment gateway simulation
* ✅ Product details page
* ✅ Cart animation & better UX

---

## 📸 Sample Flow

1. Browse products
2. Search or filter
3. Add items to cart
4. Adjust quantity
5. View total price
