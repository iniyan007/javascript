# 🖼️ Image Gallery Lightbox

## 📌 Objective

To develop an interactive image gallery where clicking on a thumbnail opens a larger version of the image in a modal (lightbox overlay).

---

## 🚀 Features

* Responsive image gallery using CSS Grid
* Clickable thumbnails
* Lightbox modal to display enlarged image
* Smooth zoom-in animation
* Close button to exit modal
* Hover effects on images

---

## 🛠️ Technologies Used

* **HTML** → Structure of the gallery and modal
* **CSS** → Styling, layout, and animations
* **JavaScript** → Event handling and dynamic updates

---

## ⚙️ How It Works

1. Images are displayed in a grid layout.
2. When a user clicks on an image:

   * JavaScript detects the click event.
   * The modal overlay is activated.
   * The clicked image is displayed in larger size.
3. Clicking the **close button (X)**:

   * Hides the modal overlay.

---

## 🧠 Key Functionalities

### 🔹 Event Listener for Images

```javascript
galleryImages[i].addEventListener("click", function () {
    overlay.classList.add("active");
    overlayImg.src = this.src;
});
```

* Detects which image is clicked
* Updates modal image dynamically

---

### 🔹 Dynamic Image Update

```javascript
overlayImg.src = this.src;
```

* Sets the clicked image as the modal image

---

### 🔹 Modal Toggle (Show/Hide)

```javascript
overlay.classList.add("active"); // Show
overlay.classList.remove("active"); // Hide
```

* Uses CSS classes to control visibility

---

### 🔹 Close Button Functionality

```javascript
closeBtn.addEventListener("click", function () {
    overlay.classList.remove("active");
});
```

---

## 🎨 CSS Highlights

### 🔹 Grid Layout

```css
.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px,1fr));
}
```

---

### 🔹 Hover Effect

```css
.gallery img:hover {
    transform: scale(0.8) rotate(-15deg);
}
```

---

### 🔹 Modal Overlay

```css
.overlay {
    position: fixed;
    background: rgba(0,0,0,0.8);
    display: none;
}
.overlay.active {
    display: flex;
}
```

---

### 🔹 Animation

```css
@keyframes zoom {
    from {
        transform: scale(0.7);
        opacity: 0;
    }
    to {
        transform: scale(1);
        opacity: 1;
    }
}
```

---

## 📸 Output

A responsive image gallery where users can click on thumbnails to view enlarged images in a modal with smooth animations.

---

## ✅ Conclusion

This project demonstrates core JavaScript concepts such as event listeners, DOM manipulation, and dynamic content updates. It also highlights CSS transitions and responsive design techniques.

---
