# 📄 Interactive To-Do List Application

## 🚀 Objective

Develop a simple and interactive **To-Do List web application** where users can:

* ➕ Add new tasks
* ✅ Mark tasks as completed
* ❌ Delete tasks

The application uses **JavaScript DOM manipulation** and **localStorage** for persistent data storage.

---

## 🧠 Concept Overview

This project demonstrates:

* Dynamic UI updates using **DOM manipulation**
* Event handling with **JavaScript**
* Persistent storage using **localStorage**
* Responsive UI using **CSS**

---

## 🔑 Key Features

### 1. ➕ Add Task

* Users can enter a task in the input field
* Clicking the **Add** button creates a new list item (`<li>`)

```javascript id="addtask"
function addtask(){
    if(inputBox.value === ''){
        alert('You must write something!');
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
    }
}
```

---

### 2. ✅ Mark Task as Completed

* Clicking on a task toggles the `checked` class
* Adds a line-through effect using CSS

```javascript id="toggle"
if(e.target.tagName === 'LI'){
    e.target.classList.toggle('checked');
}
```

---

### 3. ❌ Delete Task

* Each task includes a **delete button (×)**
* Clicking it removes the task

```javascript id="delete"
else if(e.target.tagName === 'SPAN'){
    e.target.parentElement.remove();
}
```

---

### 4. 💾 Data Persistence (localStorage)

Tasks are stored in the browser using **localStorage**, so they remain even after refreshing the page.

```javascript id="save"
function saveData(){
    localStorage.setItem('data', listContainer.innerHTML);
}
```

```javascript id="load"
function showTask(){
    listContainer.innerHTML = localStorage.getItem('data');
}
```

---

### 5. 🎧 Event Delegation

Instead of adding event listeners to each task, a single listener is attached to the parent `<ul>`.

```javascript id="event"
listContainer.addEventListener('click', function(e){
    // Handles both toggle and delete
});
```

---

## 🎨 UI Features

* Clean and modern design using **CSS gradients**
* Rounded input fields and buttons
* Interactive hover effects
* Custom checkbox icons using `::before`

---

## ⚙️ Important CSS Logic

### Completed Task Styling

```css id="checked"
ul li.checked {
    text-decoration: line-through;
    color: #999;
}
```

---

### Custom Checkbox

```css id="checkbox"
ul li::before {
    background-image: url(images/circle.png);
}
ul li.checked::before {
    background-image: url(images/checked.png);
}
```

---

## 🎯 Requirements Fulfilled

✅ DOM manipulation for dynamic elements
✅ Event listeners for user interactions
✅ Add, delete, and toggle tasks
✅ Persistent storage using `localStorage`
✅ Responsive and user-friendly UI

---

## 📌 Conclusion

This project is a great example of how to build a **fully functional interactive application using vanilla JavaScript**.

It helps in understanding:

* DOM manipulation
* Event handling
* Local storage
* UI/UX fundamentals
