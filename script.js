
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    // Prevent default form submission
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const formMessage = document.getElementById("formMessage");

    // Validate empty fields
    if (!name || !email || !message) {
        formMessage.textContent = "Please fill in all fields.";
        formMessage.style.color = "#f87171";
        return;
    }

    // Validate name
    if (name.length < 2) {
        formMessage.textContent = "Name must contain at least 2 characters.";
        formMessage.style.color = "#f87171";
        return;
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        formMessage.textContent = "Please enter a valid email address.";
        formMessage.style.color = "#f87171";
        return;
    }

    // Validate message length
    if (message.length < 10) {
        formMessage.textContent = "Message must contain at least 10 characters.";
        formMessage.style.color = "#f87171";
        return;
    }

    // Display success message
    formMessage.textContent = "Form validated successfully!";
    formMessage.style.color = "#4ade80";

    // Clear form fields
    contactForm.reset();

});
