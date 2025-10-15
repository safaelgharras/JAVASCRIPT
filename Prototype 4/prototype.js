
let taches = document.querySelectorAll(".tache");
let compteur = document.getElementById("compteur");
let boutonSave = document.getElementById("btn-save");
let listeSauvegarde = document.getElementById("liste-sauvegarde");


function CompteurDesCases() {
  let nbCochees = 0;
  taches.forEach(function(tache) {
    if (tache.checked) nbCochees++;
  });
  compteur.innerText = nbCochees;
}


taches.forEach(function(tache) {
  tache.addEventListener("change", CompteurDesCases);
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
