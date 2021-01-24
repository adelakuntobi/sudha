const hamburger = document.getElementById("hamburger"),
  sideNav = document.getElementById("side-nav");

// Navigatyion Button
hamburger.addEventListener("click", function () {
  if (sideNav.style.display === "block") {
    sideNav.style.display = "none"
  }
  else {
    sideNav.style.display = "block"
  }
});