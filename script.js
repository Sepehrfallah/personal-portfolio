const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 30);
});

document.querySelectorAll(".nav-link, .footer-links a").forEach(link => {
  link.addEventListener("click", () => {
    const nav = document.querySelector("#mainNav");
    if (nav.classList.contains("show")) bootstrap.Collapse.getOrCreateInstance(nav).hide();
  });
});

const form = document.querySelector("#contactForm");
const message = document.querySelector("#formMessage");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  message.textContent = "Message sent — thanks for reaching out!";
  form.reset();
});
