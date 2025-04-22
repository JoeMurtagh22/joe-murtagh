// Mobile menu toggle
function toggleMenu() {
  document.getElementById("nav").classList.toggle("active");
}

// Footer date
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();
});
