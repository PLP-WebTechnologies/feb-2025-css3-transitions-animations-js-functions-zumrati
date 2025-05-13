// Load saved dark mode preference
window.addEventListener("DOMContentLoaded", () => {
  const prefersDark = localStorage.getItem("darkMode") === "true";
  document.body.classList.toggle("dark", prefersDark);
  document.getElementById("darkModeToggle").checked = prefersDark;
});

// Save preference on toggle
document.getElementById("darkModeToggle").addEventListener("change", (e) => {
  const isDark = e.target.checked;
  document.body.classList.toggle("dark", isDark);
  localStorage.setItem("darkMode", isDark);
});

// Animate box on button click
document.getElementById("animateBtn").addEventListener("click", () => {
  const box = document.getElementById("box");
  box.classList.add("animate");

  // Remove class after animation ends to allow retriggering
  box.addEventListener("animationend", () => {
    box.classList.remove("animate");
  }, { once: true });
});