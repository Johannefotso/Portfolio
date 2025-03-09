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

    document.addEventListener("DOMContentLoaded", function () {
        const chatbotContainer = document.createElement("div");
        chatbotContainer.innerHTML = `
            <div id="chatbot">
                <div id="chatbot-header">Chat with me!</div>
                <div id="chatbot-messages"></div>
                <input type="text" id="chatbot-input" placeholder="Ask me something..." />
                <button id="chatbot-send">Send</button>
            </div>
        `;
        document.body.appendChild(chatbotContainer);
    
        const messagesContainer = document.getElementById("chatbot-messages");
        const inputField = document.getElementById("chatbot-input");
        const sendButton = document.getElementById("chatbot-send");
    
        const chatbotResponses = {
            "hello": "Hi there! How can I help you?",
            "what is your name": "I'm Johanne's portfolio chatbot!",
            "what are your skills": "Johanne is skilled in HTML, CSS, JavaScript, React, Python, and Java.",
            "tell me about your projects": "You can check out Johanne's projects on the portfolio section of this site!",
            "how can I contact you": "You can reach Johanne via email at johannefotso1@gmail.com or LinkedIn."
        };
    
        sendButton.addEventListener("click", function () {
            let userInput = inputField.value.toLowerCase().trim();
            if (userInput) {
                displayMessage(userInput, "user");
                setTimeout(() => {
                    let response = chatbotResponses[userInput] || "I'm not sure, but feel free to check out my portfolio!";
                    displayMessage(response, "bot");
                }, 500);
                inputField.value = "";
            }
        });
    
        function displayMessage(message, sender) {
            let messageElement = document.createElement("div");
            messageElement.classList.add("chatbot-message", sender);
            messageElement.textContent = message;
            messagesContainer.appendChild(messageElement);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }
    });
    

})();