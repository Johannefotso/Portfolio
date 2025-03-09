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
    })

    // Create chatbot container
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

        document.getElementById("chatbot-icon").addEventListener("click", toggleChatbot);
        document.getElementById("chatbot-close").addEventListener("click", toggleChatbot);
        document.getElementById("chatbot-send").addEventListener("click", sendMessage);
        document.getElementById("chatbot-input").addEventListener("keypress", function (event) {
            if (event.key === "Enter") {
                sendMessage();
            }
        });
    });

    // Toggle chatbot visibility
    function toggleChatbot() {
        const chatbotWindow = document.getElementById("chatbot-window");
        chatbotWindow.classList.toggle("hidden");
    }

    // Handle chat input
    function sendMessage() {
        const inputField = document.getElementById("chatbot-input");
        const userMessage = inputField.value.trim();
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
        let response = "I'm not sure about that. Ask me about my skills, experience, or projects!";
        const faq = {
            "hello": "Hello! How can I assist you today?",
            "hi": "Hi there! Feel free to ask me about my portfolio.",
            "skills": "I am skilled in HTML, CSS, JavaScript, React, and Python.",
            "experience": "I am a Software Developer Intern at ForwardEdge AI and have worked on various web projects.",
            "projects": "I've worked on a chatbot, battleship game, and Amazon clone. Check my GitHub!",
            "johanne": "Johanne Fotso is a tech enthusiast passionate about Web & Software development, Cybersecurity, and Innovation."
        };
        
        Object.keys(faq).forEach(key => {
            if (userMessage.toLowerCase().includes(key)) {
                response = faq[key];
            }
        });
        
        setTimeout(() => displayMessage("Chatbot: " + response, "bot"), 500);
    }

})();