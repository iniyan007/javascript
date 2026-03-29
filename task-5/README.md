# 🧠 Dynamic Quiz Application

## 📌 Objective

Build an interactive quiz application that dynamically loads questions, captures user responses, and calculates the final score.

---

## 🚀 Features

* 📋 Dynamically loads quiz questions
* 🖱️ Clickable options with selection highlight
* ⏭️ Navigate through questions using a button
* ✅ Score calculation in real-time
* 📊 Final result display with feedback
* ⚠️ Input validation (ensures answer selection)

---

## 🛠️ Technologies Used

* **HTML** – Structure of the app
* **CSS** – Styling and layout
* **JavaScript** – Logic and interactivity

---

## 📄 HTML Overview

* **Quiz Container**

  * Displays question text
  * Shows answer options
  * “Next” button for navigation

* **Result Section**

  * Hidden initially
  * Displays final score and feedback

---

## ⚙️ JavaScript Functionality

### 🔹 Quiz Data Structure

Questions are stored in a JavaScript array of objects:

```javascript
const quizData = [
  {
    question: "What is the capital of India?",
    options: ["Mumbai", "Delhi", "Chennai", "Kolkata"],
    answer: "Delhi"
  }
];
```

---

### 🔹 Variables Used

* `currentQuestion` → Tracks current question index
* `score` → Stores correct answers count
* `selectedAnswer` → Stores user selection

---

### 🔹 Function: `loadQuestion()`

#### Purpose:

Loads the current question and its options dynamically.

#### Steps:

1. Get current question from array
2. Update question text
3. Clear previous options
4. Create option elements dynamically
5. Add click event listeners

---

### 🔹 Option Selection Logic

* Highlights selected option
* Resets previously selected options

```javascript
btn.addEventListener("click", () => {
  selectedAnswer = option;
});
```

---

### 🔹 Next Button Logic

#### Steps:

1. Check if user selected an answer
2. Compare with correct answer
3. Update score
4. Move to next question
5. Show result if quiz ends

---

### 🔹 Function: `showResult()`

#### Purpose:

Displays final score and feedback.

```javascript
resultEl.innerHTML = `
  <h2>Your Score: ${score} / ${quizData.length}</h2>
  <p>${score >= 2 ? "Good job!" : "Try again!"}</p>
`;
```

---

## ⚠️ Error Handling

* Alerts user if no option is selected before clicking **Next**

```javascript
if (!selectedAnswer) {
  alert("Please select an answer!");
}
```

---

## 📊 Sample Output

```text
Your Score: 2 / 3
Good job!
```
