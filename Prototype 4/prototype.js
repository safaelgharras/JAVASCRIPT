
let taches = document.querySelectorAll(".tache");
let compteur = document.getElementById("compteur");
let boutonSave = document.getElementById("btn-save");
let listeSauvegarde = document.getElementById("liste-sauvegarde");


function Compter() {
  let n = 0;
  taches.forEach(function(tache) {
    if (tache.checked) n++;
  });
  compteur.innerText = n;
}


taches.forEach(function(tache) {
  tache.addEventListener("change", Compter);
});


boutonSave.addEventListener("click", function() {
 
  listeSauvegarde.innerHTML = "";


  taches.forEach(function(tache) {
    if (tache.checked) {
      let li = document.createElement("li");
      li.innerText = tache.value;
      listeSauvegarde.appendChild(li);
    }
  });
});
