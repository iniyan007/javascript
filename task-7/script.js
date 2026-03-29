const chatBox = document.getElementById("chatBox");
const input = document.getElementById("messageInput");

function getTime() {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function addMessage(text, sender) {
    const msgDiv = document.createElement("div");
    msgDiv.classList.add("message", sender);

    msgDiv.innerHTML = `
        <div>${text}</div>
        <div class="time">${getTime()}</div>
    `;

    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function sendMessage() {
    const text = input.value.trim();
    if (text === "") return;

    addMessage(text, "user");
    input.value = "";

    setTimeout(() => {
        addMessage(getAutoReply(), "bot");
    }, 1500);
}

function getAutoReply() {
    const replies = [
        "Hello!",
        "How are you?",
        "Nice!",
        "Tell me more...",
        "Interesting "
    ];
    return replies[Math.floor(Math.random() * replies.length)];
}

input.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});