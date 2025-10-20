
let input = document.getElementById("inputTache");
let liste = document.getElementById("liste");
let ajouterBouton = document.getElementById("ajouter");

ajouterBouton.addEventListener('click', () => {
    let texte = input.value.trim();
    if (texte === "") return;
    
    let tache = document.createElement("li");

    let checkbox = document.createElement("input");
    checkbox.type = 'checkbox';

    let span = document.createElement('span');
    span.innerText = texte;

    let supprimerBouton = document.createElement('button');
    supprimerBouton.innerHTML = "Supprimer";

    supprimerBouton.addEventListener('click', () => {
        tache.remove();
    });

<<<<<<< HEAD

=======
>>>>>>> 117239e52edf4f2af17f6fd25260a1775e011723
input.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    e.preventDefault(); 
    ajouterBouton.click(); 
  }
});

<<<<<<< HEAD

=======
>>>>>>> 117239e52edf4f2af17f6fd25260a1775e011723
    checkbox.addEventListener('change', () => {
    tache.classList.toggle('done', checkbox.checked);
    

  });

    let taches = document.createElement('div');
    tache.appendChild(checkbox);
    tache.appendChild(span);
    tache.appendChild(supprimerBouton);

    liste.appendChild(tache);

    input.value = "";
});