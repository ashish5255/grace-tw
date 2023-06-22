function openFullscreen() {
  var fullscreenElement = document.getElementById("fullscreen");
  fullscreenElement.style.display = "block";
}

function closeFullscreen() {
  var fullscreenElement = document.getElementById("fullscreen");
  fullscreenElement.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  let dateYear = new Date().getFullYear();
  let crMessage = "Copyright © " + dateYear + " | Grace Hospitality Management";
  let cr = document.getElementById("copyright");
  cr.innerText = crMessage;
});
