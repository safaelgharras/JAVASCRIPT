
let input = document.getElementById("inputTache");
let liste = document.getElementById("liste");
let ajouterBouton = document.getElementById("ajouter");


window.addEventListener('load', () => {
  let tachesEnregistrées = JSON.parse(localStorage.getItem('taches')) || [];
 tachesEnregistrées.forEach(t => {
    ajouterTache(t.texte, t.terminee);
  });
});

ajouterBouton.addEventListener('click', () => {
  let texte = input.value.trim();
  if (texte === "") return;
  ajouterTache(texte, false);
  input.value = "";
  sauvegarderTaches();
});

input.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    e.preventDefault(); 
    ajouterBouton.click(); 
  }
});


function ajouterTache(texte, terminee) {
  let tache = document.createElement("li");

  let checkbox = document.createElement("input");
  checkbox.type = 'checkbox';
  checkbox.checked = terminee;

  let span = document.createElement('span');
  span.innerText = texte;
  if (terminee) tache.classList.add('done');

  let supprimerBouton = document.createElement('button');
  supprimerBouton.innerHTML = "Supprimer";

  supprimerBouton.addEventListener('click', () => {
    tache.remove();
    sauvegarderTaches();
  });

  checkbox.addEventListener('change', () => {
    tache.classList.toggle('done', checkbox.checked);
    sauvegarderTaches();
  });

  tache.appendChild(checkbox);
  tache.appendChild(span);
  tache.appendChild(supprimerBouton);

  liste.appendChild(tache);
}


function sauvegarderTaches() {
  let allTasks = [];
  document.querySelectorAll('#liste li').forEach(li => {
    let texte = li.querySelector('span').innerText;
    let terminee = li.querySelector('input[type="checkbox"]').checked;
    allTasks.push({ texte, terminee });
  });
  localStorage.setItem('taches', JSON.stringify(allTasks));
}
