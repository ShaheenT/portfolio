// Dark Mode Toggle
const toggleButton = document.getElementById("darkModeToggle");
if(localStorage.getItem("dark-mode")==="enabled"){document.documentElement.classList.add("dark"); toggleButton.textContent="☀️";}
toggleButton.addEventListener("click",()=>{
  document.documentElement.classList.toggle("dark");
  if(document.documentElement.classList.contains("dark")){
    toggleButton.textContent="☀️"; localStorage.setItem("dark-mode","enabled");
  } else { toggleButton.textContent="🌙"; localStorage.setItem("dark-mode","disabled"); }
});

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
