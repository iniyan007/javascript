# Infinite Scrolling Content Loader

## 📌 Objective

Create a web page that dynamically loads additional content as the user scrolls toward the bottom of the page, improving user experience and performance.

---

## 🚀 Features

- Detects when the user reaches near the bottom of the page
- Fetches data asynchronously using the Fetch API
- Appends new content dynamically without reloading the page
- Displays a loading indicator while fetching data
- Prevents duplicate API calls using a loading flag

---

## 🛠️ Technologies Used

- HTML
- CSS
- JavaScript (Vanilla JS)
- Fetch API
- JSONPlaceholder (Mock API)

---

## 📄 HTML Structure

```html
<h2>Infinite Scroll</h2>
<div id="container"></div>
<div id="loader">Loading...</div>
````

### Explanation:

* `#container`: Holds dynamically loaded content
* `#loader`: Displays loading message during API calls

---

## ⚙️ JavaScript Implementation

### Variables

```javascript
let page = 1;
let loading = false;
```

- `page`: Tracks pagination
- `loading`: Prevents multiple simultaneous API calls

---

### Fetch Data Function

```javascript
async function loadData()
```

#### Steps:

1. Check if already loading
2. Show loader
3. Fetch data from API
4. Append data to DOM
5. Increment page
6. Hide loader

---

### API Used

```bash
https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}
```

- `_limit=5`: Loads 5 items per request
- `_page`: Enables pagination

---

### Scroll Detection

```javascript
window.addEventListener("scroll", () => {
    if (window.scrollY + window.innerHeight >= document.body.offsetHeight - 20) {
        loadData();
    }
});
```

#### Logic:

- `window.scrollY`: Current scroll position
- `window.innerHeight`: Viewport height
- `document.body.offsetHeight`: Total page height
- Trigger load when user is **20px near bottom**

---

### Initial Load

```javascript
loadData();
```

Loads the first batch of content when the page opens.

---

## 🎯 Key Concepts Used

### 1. Infinite Scrolling

Automatically loads content as user scrolls, removing the need for pagination buttons.

### 2. Asynchronous Data Fetching

Uses `async/await` with Fetch API for smooth, non-blocking UI updates.

### 3. Event Handling

Scroll event is used to detect user position on the page.

### 4. DOM Manipulation

Dynamically creates and appends elements to display content.

---

## ⚡ Performance Considerations

- Prevent multiple API calls using `loading` flag
- Load small chunks of data (`_limit=5`)
- Avoid excessive DOM updates

---

## 📌 Conclusion

This project demonstrates how to build an efficient infinite scrolling system using JavaScript and APIs. It enhances user experience by loading content dynamically and maintaining smooth performance.
