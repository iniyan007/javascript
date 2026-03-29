# 🔀 Drag and Drop List Reordering

## 📌 Objective

Implement an interactive list that allows users to reorder items using drag-and-drop functionality with the HTML5 Drag and Drop API.

---

## 🚀 Features

* 🖱️ Drag and drop list items to reorder
* 🎯 Visual feedback for selected and target items
* 🔄 Real-time DOM updates after dropping
* ⚡ Smooth user interaction using native JavaScript
* 📦 Lightweight (no external libraries required)

---

## 🛠️ Technologies Used

* **HTML** – Structure of the list
* **CSS** – Styling and visual feedback
* **JavaScript (HTML5 Drag & Drop API)** – Functionality

---

## 📄 HTML Overview

* A container with a heading
* An unordered list (`<ul>`)
* List items (`<li>`) with `draggable="true"`

```html
<ul id="list">
  <li draggable="true">Item 1</li>
  <li draggable="true">Item 2</li>
</ul>
```

---

## ⚙️ JavaScript Functionality

### 🔹 Key Variables

* `draggedItem` → Stores the currently dragged element
* `list` → Reference to the `<ul>` container

---

### 🔹 Helper Function

#### `getListItem(element)`

Finds the closest `<li>` element during drag events.

```javascript
function getListItem(element) {
  return element.closest("li");
}
```

---

### 🔹 Drag Events Used

| Event       | Purpose                               |
| ----------- | ------------------------------------- |
| `dragstart` | Triggered when dragging begins        |
| `dragend`   | Triggered when dragging ends          |
| `dragover`  | Allows dropping by preventing default |
| `dragleave` | Removes highlight when leaving item   |
| `drop`      | Handles item repositioning            |

---

### 🔹 Drag Start

* Stores dragged item
* Adds visual class

```javascript
item.classList.add("dragging");
```

---

### 🔹 Drag Over

* Enables drop (`e.preventDefault()`)
* Highlights potential drop target

```javascript
target.classList.add("over");
```

---

### 🔹 Drop Logic

#### Steps:

1. Identify target element
2. Calculate mouse position relative to target
3. Insert dragged item before or after target

```javascript
if (offset > bounding.height / 2) {
  target.after(draggedItem);
} else {
  target.before(draggedItem);
}
```

---

### 🔹 Drag End

* Removes visual styles
* Cleans up state

---

## 🎨 Visual Feedback (CSS Concept)

* `.dragging` → Highlights dragged item
* `.over` → Highlights drop target

Example:

```css
.dragging {
  opacity: 0.5;
}

.over {
  border: 2px dashed #000;
}
```

---

## ⚠️ Error Handling & Edge Cases

* Prevents dropping on itself
* Handles dragging over non-`li` elements
* Ensures only valid targets are used

---

## 📊 Example Behavior

```text
Before:
Item 1
Item 2
Item 3

After dragging Item 3 to top:
Item 3
Item 1
Item 2
```
