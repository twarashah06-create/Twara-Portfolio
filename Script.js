document.addEventListener("DOMContentLoaded", function() {

    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        alert("Thank you for contacting me! Your message has been received.");

        form.reset();
    });

});

console.log("Welcome to Twara's Portfolio!");