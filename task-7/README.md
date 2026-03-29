# 💬 Real-Time Chat Simulation

## 📌 Objective

Develop a chat interface that simulates real-time messaging using JavaScript without requiring a backend server.

---

## 🚀 Features

* 💬 Send and display user messages instantly
* 🤖 Simulated bot replies using `setTimeout`
* 🕒 Timestamp for each message
* ⌨️ Send message using button or **Enter key**
* 📜 Auto-scroll to latest message
* ⚡ Dynamic DOM updates

---

## 🛠️ Technologies Used

* **HTML** – Structure of the chat UI
* **CSS** – Styling for chat layout and messages
* **JavaScript** – Logic for messaging and simulation

---

## 📄 HTML Overview

* **Chat Container**

  * Header section
  * Chat display area (`chatBox`)
  * Input field and send button

```html id="vtpcc2"
<div id="chatBox" class="chat-box"></div>
<input id="messageInput" type="text" placeholder="Type a message..." />
<button onclick="sendMessage()">Send</button>
```

---

## ⚙️ JavaScript Functionality

### 🔹 Key Elements

* `chatBox` → Displays all messages
* `input` → Captures user input

---

### 🔹 Function: `getTime()`

#### Purpose:

Returns the current time in `HH:MM` format.

```javascript id="n0wh67"
return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
```

---

### 🔹 Function: `addMessage(text, sender)`

#### Purpose:

Dynamically creates and displays a message in the chat.

#### Features:

* Adds message text
* Appends timestamp
* Applies sender-specific styling (`user` / `bot`)
* Auto-scrolls to latest message

---

### 🔹 Function: `sendMessage()`

#### Steps:

1. Get user input
2. Validate (ignore empty input)
3. Display user message
4. Clear input field
5. Simulate bot reply using `setTimeout`

```javascript id="7hkcc2"
setTimeout(() => {
  addMessage(getAutoReply(), "bot");
}, 1500);
```

---

### 🔹 Function: `getAutoReply()`

#### Purpose:

Returns a random predefined response.

```javascript id="3obp3v"
const replies = ["Hello!", "How are you?", "Nice!"];
```

---

### 🔹 Event Listener (Enter Key Support)

```javascript id="q9ebyo"
input.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});
```

---

## 🎨 UI Behavior

* User messages appear on one side
* Bot messages appear on the opposite side
* Each message includes a timestamp
* Chat automatically scrolls down

---

## ⚠️ Error Handling

* Prevents sending empty messages
* Ensures smooth UI updates without crashes

---

## ▶️ How to Run the Project

1. Download or clone the repository
2. Open `index.html` in your browser
3. Type a message and click **Send** or press **Enter**
4. View simulated bot replies

---

## 📊 Sample Output

```text id="q99w87"
User: Hello
Bot: How are you?

User: I'm fine
Bot: Nice!
```
