(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });

    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    });

    // Ensure chatbot stays hidden initially
    document.addEventListener("DOMContentLoaded", function () {
        const chatbotContainer = document.createElement("div");
        chatbotContainer.id = "chatbot-container";
        chatbotContainer.innerHTML = `
            <div id="chatbot-icon">💬</div>
            <div id="chatbot-window" class="hidden">
                <div id="chatbot-header">Chatbot <span id="chatbot-close">✖</span></div>
                <div id="chatbot-messages"></div>
                <input type="text" id="chatbot-input" placeholder="Ask me something...">
                <button id="chatbot-send">Send</button>
            </div>
        `;
        document.body.appendChild(chatbotContainer);

        const chatbotWindow = document.getElementById("chatbot-window");
        const chatbotIcon = document.getElementById("chatbot-icon");
        const chatbotClose = document.getElementById("chatbot-close");

        chatbotIcon.addEventListener("click", () => {
            chatbotWindow.classList.toggle("hidden");
        });

        chatbotClose.addEventListener("click", () => {
            chatbotWindow.classList.add("hidden");
        });

        document.getElementById("chatbot-send").addEventListener("click", sendMessage);
        document.getElementById("chatbot-input").addEventListener("keypress", function (event) {
            if (event.key === "Enter") {
                sendMessage();
            }
        });
    });

    // Handle chat input
    function sendMessage() {
        const inputField = document.getElementById("chatbot-input");
        const userMessage = inputField.value.trim().toLowerCase();
        if (userMessage === "") return;

        inputField.value = "";
        displayMessage("You: " + userMessage, "user");
        generateResponse(userMessage);
    }

    // Display message in chatbot window
    function displayMessage(message, sender) {
        const messageContainer = document.createElement("div");
        messageContainer.classList.add(sender);
        messageContainer.textContent = message;
        document.getElementById("chatbot-messages").appendChild(messageContainer);
        document.getElementById("chatbot-messages").scrollTop = document.getElementById("chatbot-messages").scrollHeight;
    }

    // Generate responses based on FAQs
    function generateResponse(userMessage) {
        const faq = {
            "hello": "Hello! How can I assist you today?",
            "hi": "Hi there! How can I help you?",
            "skills": "I am skilled in HTML, CSS, JavaScript, React, and Python.",
            "experience": "I am a Software Developer Intern at ForwardEdge AI and have worked on various web projects.",
            "projects": "I've worked on a chatbot, battleship game, and Amazon clone. Check my GitHub!",
            "johanne": "Johanne Fotso is a tech enthusiast passionate about Web & Software development, Cybersecurity, and Innovation.",
            "education": "Johanne Fotso is currently a senior at Bowie State University, majoring in Computer Technology."
        };
        
        const response = faq[userMessage] || "I'm not sure about that. Ask me about my skills, experience, education, or projects!";
        setTimeout(() => displayMessage("Chatbot: " + response, "bot"), 500);
    }
})();
