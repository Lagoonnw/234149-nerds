var link = document.querySelector(".map-write-btn");
var popup = document.querySelector(".modal-content");
var close = document.querySelector(".modal-content-close");
var name = popup.querySelector("[name=name]");

link.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.add("modal-content-show");
  name.focus();
});

close.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.remove("modal-content-show");
});

