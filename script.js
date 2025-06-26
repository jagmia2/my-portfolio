const form = document.getElementById("contact-form");
const thankYou = document.getElementById("thank-you-message");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString()
    })
        .then(() => {
            form.style.display = "none";
            thankYou.style.display = "block";
        })
        .catch((error) => alert("Something went wrong: " + error));
});

const toggleButton = document.getElementById("dark-toggle");

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Change emoji only
    toggleButton.textContent = document.body.classList.contains("dark-mode")
        ? "☀️"
        : "🌙";
});


