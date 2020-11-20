// Enoncé de l'exercice

//Créer un fichier 01_bonjour.html et faire le lien avec le fichier 01_bonjour.js

// écrire le code invitant l'utilisateur à saisir d'abord le prénom
//on récupère ce que l'utilisateur a saisi 
var prenom=prompt("Entrez votre prénom");

// écrire le code invitant l'utilisateur à saisir le nom
var nom=prompt("Entrez votre nom");

// Afficher ensuite dans une autre boite de dialogue le prénom et le nom de l'utilisateur :
//on crée d'abord la concaténation de prenom et du nom en ajoutant un espace.
result=prenom+" "+nom;

//On affiche ensuite le résultat de la concaténation dans html
document.write(result);

// il existe deux boites de dialogues :
//alert() pour afficher
//prompt() pour saisir une donnée et
// prompt invite l'utilisateur à saisir une donnee, et pour la récuperer on doit la mettre dans une variable qui va la stocker temporairement
//alert permet d'afficher seulement.

alert("Bonjour "+prenom+" "+nom); //pour afficher dans une boite de dialogue
document.write()//pour afficher dans la page html