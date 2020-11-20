//Les, opérateurs arithmétiques

var nb1,nb2,result; 
//permet de déclarer plusieurs variables en même temps, au lieu d'écrire plusieurs lignes distinctes
//var nb1;
//var nb2;
//var result;

//On affecte ensuite des valeurs
nb1=10;
nb2=42;

//ADDITIONS
result=nb1 + nb2; //le resultat s'affiche temporairement
console.log(result);
document.write(result);

//SOUSTRACTIONS
result=nb2 - nb1;
console.log(resultat);

// MULTIPLICATIONS
mult=nb1*nb2;
document.write(mult + "<br>"); //on a ajouté ici "<br>" pour faire un saut de ligne

//DIVISIONS
div=nb2/nb1;
document.write(div + "<br>");

//MODULO (le reste d'une division)
mod=nb2%nb1 // c'est le reste de la division, nb1 étant ici le diviseur, et mod est strictement inféreur au diviseur nb1
document.write(mod);

//INCREMENTATIONS
//  manières d'incrémenter : soit nb=nb+1 ou nb++ ou ++nb , et ici nb+ vaut 1
var nb3=6;
nb3=nb3+1;
console.log(nb3);
//nb3++ (ou ++nb3) signifie que j'incrémente nb3 de 1
//nb3+ est l'indice d'incrémentation et vaut 1 par défaut, ie on peut lui donner une autre valeur

//DECREMENTATIONS
//c'est l'inverse de l'incrémentation

var nb5=8;
nb5++;//nb5 passe à 9 car on a incrémenté de 1 la ligne précédente
nb5--;//nb5 passe à 8 car on a décrémenté de 1 la ligne précédente

//nb5-- est équivalent à nb5=nb5-1
//nb5- est l'indice de décrémentation et vaut 1 par défaut, ie on peut lui donner une autre valeur
//
