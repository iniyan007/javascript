# 📄 Single-Page Application (SPA) with Hash-Based Routing

## 🎯 Objective

Build a basic **Single-Page Application (SPA)** that allows navigation between multiple views **without reloading the page**.

---

## 📌 Description

This project demonstrates how to implement **client-side routing** using the **URL hash (`#`)**. The application dynamically updates content based on the current route while maintaining a consistent UI.

---

## ⚙️ Requirements

### ✅ 1. Hash-Based Routing

* Use the `window.onhashchange` event (or equivalent listener)
* Detect changes in the URL hash (`#/home`, `#/about`, etc.)

---

### ✅ 2. Dynamic Content Loading

* Render different content based on the current route
* Update only a specific section of the page (`<div id="app">`)
* Avoid full page reloads

---

### ✅ 3. Maintain UI State

* Keep navigation bar and layout consistent
* Only update the content area
* Ensure smooth transitions between views

---

## 🧩 Implementation

### 📍 HTML Structure

```html
<nav>
    <a href="#/">Home</a>
    <a href="#/about">About</a>
    <a href="#/contact">Contact</a>
</nav>

<div id="app"></div>
```

---

### 📍 Page Components

Each route is represented by a function:

```javascript
function home(){
    return `
        <h1>Home</h1>
        <p>Welcome to the home page!</p>
    `;
}
```

---

### 📍 Route Configuration

```javascript
const routes = {
    "/": home,
    "/about": about,
    "/contact": contact
};
```

---

### 📍 Router Logic

```javascript
function router(){
    const path = location.hash.slice(1) || "/";
    const route = routes[path] || home;
    document.getElementById("app").innerHTML = route();
}
```

---

### 📍 Event Handling

```javascript
window.addEventListener("load", router);
window.addEventListener("hashchange", router);
```

---

## 🔄 Working Flow

1. User clicks a navigation link
2. URL hash changes (`#/about`)
3. `hashchange` event is triggered
4. Router function executes
5. Corresponding content is rendered

---

## 🌐 Example Routes

| Route       | View    |
| ----------- | ------- |
| `#/`        | Home    |
| `#/about`   | About   |
| `#/contact` | Contact |

---

## 💡 Key Concepts

* **SPA (Single Page Application):** Loads content dynamically without refreshing
* **Hash Routing:** Uses URL fragments (`#`) for navigation
* **DOM Manipulation:** Updates UI using JavaScript

---

## 🧪 Output

* Smooth navigation without reload
* Fast content switching
* Consistent layout across pages

---

## 🚀 Conclusion

This project demonstrates a simple yet powerful way to build SPAs using **vanilla JavaScript**. It lays the foundation for understanding advanced routing libraries like **React Router**.
