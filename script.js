// Select elements
const button = document.getElementById("btn");
const message = document.getElementById("message");

// Add click event
button.addEventListener("click", function () {
    message.textContent = "🎉 Button clicked successfully!";
});