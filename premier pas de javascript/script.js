let nom = "Safa";
let age = 25;

console.log("Bonjour, " + nom + " tu as " + age + " ans ");
/* somme */

let nombre1 = 10;
let nombre2 = 5;

let somme = nombre1 + nombre2;
console.log("La somme : " + somme);

/* différence */

let nombre3 = 10;
let nombre4 = 5;

let différence = nombre3 - nombre4;
console.log("La différence : " + différence);

/*produit */

let nombre5 = 10;
let nombre6 = 5;

let produit = nombre5 * nombre6;
console.log("Le produit :" + produit);

/* quotient */
 let nombre7 = 10;
 let nombre8 = 5;

 let quotient = nombre7 / nombre8;
 console.log("Le quotient :" + quotient)

 /*fonction */

 function direBienvenuesurmapage(prenom) {
    console.log("bienvenue sur ma page " + prenom + "!");
 }
 direBienvenuesurmapage("safa");
 direBienvenuesurmapage("basma");

 /*foction de retour */

 function addition(S, H) {
    return S + H;
 }
let resultat = addition(7, 12);
console.log(resultat);

/*ex2 */

function estMajeur (aage) {
    if (aage >= 18) {
       return "Majeur"
    } else {
        return "Mineur"
    } 
    
}
console.log(estMajeur(25));
console.log(estMajeur(15));


/*ex */

function calculerAge(AnnéeActuelle, AnnéeNaissance) {
    return AnnéeActuelle - AnnéeNaissance;
}
let aAge = calculerAge(2025, 2000);
console.log("Tu as " + aAge + "ans.");

/*condition */

let aaage = 25;

if (aaage>= 25) {
    console.log(" Tu es majeur.");
} else {
    console.log(" Tu es mineur. ");
}

let note = 15
if (note>=15.5) {
    console.log("Très bien.");
} else if (note>=9.5 ) {
    console.log("Passable.");
} else {
    console.log("Echec.");
}


/*switch */

let jour = "Lundi";
switch (jour) {
    case "Lundi":
        console.log("Début de semaine");
        break;
    case "Samedi" : 
    case " Dimanche" :
        console.log("Weekend !");
        break;
    default:
         console.log("Jour normal ");

}


/*exercice */
function calculer(a, b, operation){
    if( operation === "+"){
        return a + b;
    
    } else if( operation === "-") {
        return a - b;

    } else if ( operation === "*"){
        return a * b;
    } else if (operation === "/"){
        return a / b;
    } else {
        return "operation unvalide"
    }
}
console.log(calculer(7, 12, "+"));
console.log(calculer(7, 12, "-"));
console.log(calculer(7, 12, "*"));
console.log(calculer(7, 12, "/"));


/* exercice */
 function plusGrand(a, b){
    if (a> b){
        return a;
    } else {
        return b;
    }
 }
 console.log(plusGrand(7, 12));

 /*cdd */
 
 function count(limit) {
    var number = 2;
    while(true) {
        console.log(number)
        if (number === limit) {
            break;
        }
        number++;
    }
 }
 count(6);

 