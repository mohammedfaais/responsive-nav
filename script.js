const hamburger = document.getElementById("hamburger");
const navList = document.getElementById("nav-list");

hamburger.addEventListener("click", function(){
  navList.classList.toggle("nav-active");
  hamburger.classList.toggle("active");
})