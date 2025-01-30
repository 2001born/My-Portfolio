const texts = ["Software Developer", "Cybersecurity Enthusiast", "Web Developer"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const speed = 50; // Typing speed
const pause = 500; // Pause before erasing
const textElement = document.getElementById("changing-text");

function typeEffect() {
    let currentText = texts[textIndex];
    if (isDeleting) {
        textElement.innerText = currentText.substring(0, charIndex--);
    } else {
        textElement.innerText = currentText.substring(0, charIndex++);
    }

    if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => { isDeleting = true; }, pause);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
    }

    setTimeout(typeEffect, isDeleting ? speed / 2 : speed);
}

document.addEventListener("DOMContentLoaded", typeEffect);

document.getElementById("explore-btn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default jump
    document.querySelector("#about").scrollIntoView({
        behavior: "smooth"
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const certCards = document.querySelectorAll(".certification-card");

    function checkScroll() {
        certCards.forEach((card) => {
            const cardTop = card.getBoundingClientRect().top;
            if (cardTop < window.innerHeight - 50) {
                card.style.opacity = 1;
                card.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();
});




// EmailJS Form Submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.init("CvbpMV_YxiuBIQi8g"); // Replace with your EmailJS Public Key

    emailjs.sendForm("service_lsl1xak", "template_v72tlym", this)
        .then(() => {
            // Show a success popup message
            alert("Message sent successfully!");

            // Clear the form fields
            document.getElementById("contact-form").reset();
        })
        .catch((error) => {
            alert("Failed to send message! Please try again.");
            console.error("Error:", error);
        });
});

