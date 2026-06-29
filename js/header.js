const button = document.querySelector(".btn--register");

button.addEventListener("click", () => {
  button.classList.toggle("btn--active");
});

const submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", function (e) {
  e.preventDefault();

  submitButton.classList.toggle("btn--active");
});
