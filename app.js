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
            <div id="chatbot-icon" onclick="toggleChatbot()">💬</div>
            <div id="chatbot-window" class="hidden">
                <div id="chatbot-header">Chatbot <span onclick="toggleChatbot()">✖</span></div>
                <div id="chatbot-messages"></div>
                <input type="text" id="chatbot-input" placeholder="Ask me something..." onkeypress="handleChat(event)">
            </div>
        `;
        document.body.appendChild(chatbotContainer);
    });

    // Toggle chatbot visibility
    function toggleChatbot() {
        document.getElementById("chatbot-window").classList.toggle("hidden");
    }

    // Handle chat input
    function handleChat(event) {
        if (event.key === "Enter") {
            const inputField = document.getElementById("chatbot-input");
            const userMessage = inputField.value;
            inputField.value = "";
            displayMessage("You: " + userMessage, "user");
            generateResponse(userMessage);
        }
    }

    // Display message in chatbot window
    function displayMessage(message, sender) {
        const messageContainer = document.createElement("div");
        messageContainer.classList.add(sender);
        messageContainer.textContent = message;
        document.getElementById("chatbot-messages").appendChild(messageContainer);
    }

    // Generate responses based on FAQs
    function generateResponse(userMessage) {
        let response = "I'm not sure about that. Ask me about my skills, experience, or projects!";
        const faq = {
            "skills": "I am skilled in HTML, CSS, JavaScript, React, and Python.",
            "experience": "I am a Software Developer Intern at ForwardEdge AI and have worked on various web projects.",
            "projects": "I've worked on a chatbot, battleship game, and Amazon clone. Check my GitHub!"
        };
        
        Object.keys(faq).forEach(key => {
            if (userMessage.toLowerCase().includes(key)) {
                response = faq[key];
            }
        });

        setTimeout(() => displayMessage("Chatbot: " + response, "bot"), 500);
    }
    
})();