# 🧮 Simple Calculator Web App

## 📌 Objective

The objective of this project is to build a basic calculator that performs arithmetic operations such as:

* Addition (+)
* Subtraction (-)
* Multiplication (*)
* Division (/)

---

## 🚀 Features

* User-friendly calculator interface
* Buttons for numbers and arithmetic operators
* Real-time display of user input
* **AC (All Clear)** button to reset the display
* **DC (Delete/Clear Last)** button to remove the last character
* Supports decimal numbers
* Error handling for invalid expressions

---

## 🛠️ Technologies Used

* **HTML** → Structure of the calculator
* **CSS** → Styling and layout design
* **JavaScript** → Functionality and calculations

---

## ⚙️ How It Works

1. The user clicks on number and operator buttons.
2. Each button appends its value to the display.
3. The display updates dynamically as input is entered.
4. When the "=" button is pressed:

   * The expression is evaluated using JavaScript.
   * The result is displayed.
   * If an error occurs, `"Error"` is shown.

---

## 🧠 Key Functionalities

### 🔹 Input Handling

Each button uses the `onclick` event to update the display:

```html
<input type="button" value="7" onclick="display.value += '7'"/>
```

---

### 🔹 Clear Display (AC)

```html
<input type="button" value="AC" onclick="display.value=''"/>
```

* Clears the entire input field.

---

### 🔹 Delete Last Character (DC)

```html
<input type="button" value="DC" onclick="display.value = display.value.toString().slice(0,-1)"/>
```

* Removes the last entered character.

---

### 🔹 Calculation with Error Handling

```html
<input type="button" value="=" onclick="
try {
    display.value = eval(display.value)
} catch {
    display.value = 'Error'
}" class="equal"/>
```

* Evaluates the mathematical expression.
* Displays `"Error"` if the expression is invalid.

---

## 📸 Output

A visually styled calculator that allows users to perform basic arithmetic operations interactively.

---

## ✅ Conclusion

This project demonstrates fundamental web development concepts such as DOM manipulation, event handling, and dynamic UI updates using JavaScript. It serves as a strong beginner-level project for understanding frontend development.

---
