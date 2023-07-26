const nav = document.querySelector(".nav");
const ul = document.querySelector(".ul_collapsed");
const icons = document.querySelectorAll(".icon");

icons[0].addEventListener("click", function () {
  window.open("https://www.instagram.com/elosa68/");
});
icons[1].addEventListener("click", function () {
  window.open("https://www.tiktok.com/@elosa68");
});

nav.addEventListener("click", function () {
  nav.classList.toggle("nav_expanded");
  document;

  ul.classList.toggle("ul_expanded");
  console.log("hello");
});
console.log("hello");
