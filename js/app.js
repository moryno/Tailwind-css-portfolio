const hamberger = document.querySelector("#hamberger");
const menu = document.querySelector("#menu");
const moon = document.querySelector("#moon");
const body = document.querySelector("body");
const hLinks = document.querySelectorAll("#hLink");

hamberger.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  hamberger.classList.toggle("bg-white");
});

hLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    hamberger.classList.toggle("bg-white");
  });
});

moon.addEventListener("click", () => {
  body.classList.toggle("dark");
});
