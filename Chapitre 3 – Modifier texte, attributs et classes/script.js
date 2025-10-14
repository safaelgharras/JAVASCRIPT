let titre = document.getElementById("titre");
let image = document.querySelector("img");
let bouton = document.querySelector(".btn");

bouton.addEventListener("click", function() {
  titre.innerText = "Hello eren !";
  titre.classList.toggle("highlight");
  image.setAttribute("src", "Images/mikasaeren.jpg");
  image.setAttribute("alt", "mikasa");
});
