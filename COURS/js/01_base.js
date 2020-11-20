/*
Javascript est un langage de programmation
*/

/*
LES VARIABLES
        La déclaration des variables en javascript se fzit avec var nom_de_variable=valeur;
        Il y a deux versions javascript(deux standards) Ecmascript5(es5) et Ecmascript6(es6)
        Avec Es6=Es6= let nom_variables=valeur;
        Idealement les noms de variables contient des caracteres alphanumeriques avec underscore: tout est attache et il n-y a pas de caracteres speciaux.
        IMPORTANT : les variables ne commencent pas par un chiffre.

        IMPORTANT : on ne nomme pas une variable avec un nom de variable réservé (par exemple, var est un nom réservé)

        On peux déclarer des variables vides:
        var prenom;
  */ 

 /*
        LES TYPES DE VARIABLES
        type number(entier)
        type float(nombre decimal)
        string(chaine de caracteres)
        type boolean(true ou false)
        type tableau
        type objet

        Chaque instruction se termine avec un point-virgule ";"
        var age=30;// declaration d'une variable de type number
        var prenom="Amelie";// declaration d'une variable de type chaine de caracteres
        var bool=true/false;// la declaration d'une variable booleenne
        var nombre_dec_5.35;// declaration d'un nombre decimal(float)

*/
 
//Javascript est autotypé, puisqu'il affecte le type de variable selon la valeur affectée.
//une valeur écrite sous entrecote est une chaine de caractères (string), et une valeur affectée ecrite sans entrecote est un nombre (number)


//Javascript est un langage sensible à la casse, ie il fait la différence entre majuscule et minuscule.
//maVariable, mavariable et ma_variable sont toutes des variables différentes

// Le préalable est la déclaration des variables :
var variable;
//Ensuite on affecte une valeur à la variable initialement déclarée :
variable="Bonjour";
//Si on affecte une valeur à une variable non déclarée, on aura en affichage le mot "undefined".
// Si on réaffecte une nouvelle valeur à une variable, elle écrase la précedente valeur.

var prenom="Amelie";
var age=56;

//Deux modes d'affichage des variables : avec consol.log() et document.write()

console.log(prenom);//console.log() permet d'afficher des variables et des instructions dans la console et pas dans la page html. (procédure : afficher le fichier html puis cliquer sur F12 et cliquer sur "Console")
console.log(age);
// pour afficher une variable dans l'html, on utilise la fonction write()
document.write(prenom);
document.write(age);

//Affichage d'une boite de dialogue avec alert()
alert("COOOL !!!!! Le Super Groupe de Vitry a démarré le cours sur Javascript");

// On peut aussi afficher avec window.alert()
window.alert(prenom);

var question=prompt("Avez-vous aimé le Javascript?");
console.log(question);
document.write(question);

//La déclaration d'une constante se fait avec "const", et le nom de cette constante s'écrit tout en majuscules. C'est une valeur qui ne varie pas.
const DEVISE="Euro";
const ANNEE="2020";

//Le changement de type de variable peut se faire, de façon logique et cohérente, 
//Les changements possibles sont :
//changement de number vers string se fait avec toString()
// changement de string vers number se fait avec parseInt()
//changement de number vers float se fait avec toFloat()
//changement de float vers number se fait avec toNumber()

//On peut changer également le type de la variable : par exemple, une année peut être un number comme elle peut être une chaine de caractere.

//Pour afficher le type de variable, on utilise la fonction typeof
//Pour le visualiser dans la console, on écrit console.log(typeof variable)

//Exemple 1 :
var age=56;
console.log(typeof age);
//En affichage dans la console on aura "number"

//Exemple 2 :
var age="56";
console.log(typeof age);
//En affichage dans la console on aura "string"

//La fonction parseInt() permet de changer le type de variable en number, integer ou float
//La fonction parseFloat