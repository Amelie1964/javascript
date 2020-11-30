// Test de l'affichage du nombre de tours de manège

// Avec la boucle WHILE

var compteur1;
var compteur1=1;
var max1; // nombre maximal de tours
var max1=prompt("Veuillez saisir le nombre maximal de tours");
document.write("Je veux effectuer "+max1+" tours"+"<br>");
while (compteur1<=max1){// tant que compteur1 est inférieur
document.write("C'est le tour numéro "+compteur1+"<br>");
compteur1=compteur1+1;//compteur++ : on incrémente le compteur qui affiche le nombre de tours à chaque fois.
}


// Avec la boucle FOR
var compteur2;
var max2; // nombre maximal de tours
var max2=prompt("Veuillez saisir le nombre maximal de tours");
document.write("Je veux effectuer "+max2+" tours"+"<br>");

for(compteur2=1;compteur2<=max2;compteur2++){
    document.write("C'est le tour numéro "+compteur2+"<br>");
}

// Si on veut limiter le nombre de tours à 10

var compteur3;
var max3; // nombre maximal de tours
var max3=prompt("Veuillez saisir le nombre maximal de tours");
document.write("Je veux effectuer "+max3+" tours"+"<br>");
if(max3<=10){//Ici, on limite l'utilisateur à 10 tours. S'il tape un nombre supérieur à 10, on lui affiche un message d'erreur.
for(compteur3=1;compteur3<=max3;compteur3++){
    document.write("C'est le tour numéro "+compteur3+"<br>");
}
}else{// le SINON de de la condittion IF
    document.write("<h5>Il faut saisir un nombre maximal de tours inférieur</h5>");
}

//Comment choisir FOR et quand choisir WHILE
// On utilise FOR quand on sait combien de tours on va faire, ie quand on connait la limite supérieure.