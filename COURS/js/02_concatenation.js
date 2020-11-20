///Concaténation des variables et des chaînes de caractères
//La concaténation se fait avec l'opérateur +
// Elle s'affiche par la fonction result()
var var1="Je suis une chaîne de caractères";
var var2="concaténée à partir de plusieurs chaînes";
var result=var1+"  //  "+var2;
console.log(result);
document.write(result);

//Concaténation des variables de type number
//Elle s'affiche avec la fonction calcul()
var annee=2020;
var mois=11;
//annee et mois sont des variables de type number. si on utilise directement le sélecteur + pour concaténer ces deux variables, on aura comme résultat une addition.
//pour une concaténation, on doit changer la nature de ces variabbes en type string.
var calcul=annee.toString() + mois.toString();
console.log(calcul);
ducument.write(calcul);