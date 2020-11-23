
//CALCUL DU PRIx TTC à partir du PRIX HT
alert("Calcul du Prix TTC à partir du Prix HT");
//Déclaration des variables
var prixHt1; //Prix HT1

//Saisie du Prix HT
prixHt1=prompt("Veuillez saisir le Prix HT en euros:");

// Définition du Prix TTC
prixTtc1=prixHt1*1.2; // result=prixHt +prixHT*TVA/100

//Affichage du Prix TTC dans la console
console.log(prixTtc1);

//Ecriture dans le fichier Html
document.write(prixTtc1 + "<br>");

//Affichage du Prix TTC dans une boîte de dialogue
alert("Pour une TVA de 20%, le Prix TTC est de: " +prixTtc1+" "+"euros.");


//CALCUL DU PRIX HT à partir du PRIX TTC
alert("Calcul du Prix TTC à partir du Prix HT");
//Déclaration des variables
var prixTtc2; //Prix TTC

//Saisie du Prix HT
prixTtc2=prompt("Veuillez saisir le Prix TTC en euros:");

// Définition du Prix HT
PrixHt2=prixTtc2/1.2; // comme PrixTtc=PrixHT(1 + TVA/100), alors PrixHt=prixTtc/(1+TVA/100), ie PrixHt=PrixTtc/1.2

//Affichage du Prix TTC dans la console
console.log(PrixHt2);

//Ecriture dans le fichier Html
document.write(PrixHt2 + "<br>");

//Affichage du Prix TTC dans une boîte de dialogue
alert("Si on a une TVA de 20%, le Prix HT est de: " +PrixHt2+" "+"euros.");