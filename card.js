const toggleSwitch = document.getElementById("theme-toggle");
const body = document.body;
const modeText = document.getElementById("mode-text");

toggleSwitch.addEventListener("change", () => {
    body.classList.toggle("light-mode");
    modeText.textContent = body.classList.contains("light-mode") ? "Light Mode" : "Dark Mode";
});
