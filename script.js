// Dark Mode Toggle
const toggleBtn = document.getElementById("dark-toggle");
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
    const isDark = document.documentElement.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    toggleBtn.textContent = isDark ? "☀️" : "🌙";
  });

  // Load saved theme
  if (localStorage.getItem("theme") === "dark") {
    document.documentElement.classList.add("dark");
    toggleBtn.textContent = "☀️";
  }
}

// Scroll Reveal
window.addEventListener("scroll",()=>{
  document.querySelectorAll(".reveal").forEach(el=>{
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    if(elementTop < windowHeight - 150){ el.classList.add("opacity-100","translate-y-0"); }
  });
});

// Project Click
function openProject(url){window.open(url,"_blank");}

// Contact Form Alert
document.getElementById("contactForm").addEventListener("submit", e=>{
  e.preventDefault();
  alert("📩 Thanks for your message! I'll get back to you soon.");
});
