const headerEl = document.querySelector(".headerEl");
const topButton = document.getElementById("top");
const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector(".navigation");

headerEl.addEventListener("click", (e) => {
  if (e.target.classList.contains("link")) {
    e.preventDefault();
    const id = e.target.getAttribute("href");
    if (id === "#")
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    else {
      const section = document.querySelector(id);
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
});

topButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

let isActive = false;

hamburger.addEventListener("click", () => {
  isActive = !isActive;
  hamburger.classList.toggle("active");
  navigation.classList.toggle("show");
});
