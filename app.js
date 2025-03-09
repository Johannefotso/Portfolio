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
    
    document.addEventListener("DOMContentLoaded", function() {
        const chatbotMessages = document.getElementById("chatbot-messages");
        const chatbotInput = document.getElementById("chatbot-input");
        const chatbotSend = document.getElementById("chatbot-send");
    
        function addMessage(text, sender) {
            const message = document.createElement("div");
            message.textContent = text;
            message.style.padding = "10px";
            message.style.margin = "5px";
            message.style.borderRadius = "5px";
            message.style.background = sender === "user" ? "#6c7983" : "#941bb5";
            chatbotMessages.appendChild(message);
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        }
    
        chatbotSend.addEventListener("click", function() {
            const userMessage = chatbotInput.value.trim();
            if (userMessage) {
                addMessage(userMessage, "user");
                chatbotInput.value = "";
    
                setTimeout(() => {
                    let botReply = "I'm still learning! Try asking something else.";
                    if (userMessage.toLowerCase().includes("hello")) {
                        botReply = "Hi there! How can I help you today?";
                    } else if (userMessage.toLowerCase().includes("portfolio")) {
                        botReply = "Check out my portfolio section for my projects!";
                    }
                    addMessage(botReply, "bot");
                }, 1000);
            }
        });
    });    
})();