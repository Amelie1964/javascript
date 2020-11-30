// Les boucles permettent de répéter des actions n fois
//On a différents types de boucles : la boucle for(pour...), la boucle while(tant que...), la boucle do while(...)


//BOUCLE FOR
//La syntaxe de la boucle for est :
//for(la valeur de démarrage de la boucle; la limite de la boucle; le pas d'incrémentation)

//Exemple : boucle dont l'itération commence à zéro, avec une limite de 10 et un pas d'incrémentation de 1
for(var i=0;i<10;i++){//la boucle commence à 0 et s'incrémente à chaque fois de 1. 
//Nota : pour l'incrémentation, on peut écrire i
document.write(i+"<br>");
}
//incrémentation par 2 ou plus
for(var i=0;i<10;i=i+2){
    document.write(i+"<br>");
}

//Créer une boucle de 0 à 5, où l'incrémentation est de 1, et on affiche à chaque fois le carré de de la valeur courante de i
for( var i=0;i<=5;i++){
    document.write("le résultat de "+i+"*"+i+" est: "+i*i+"<br>");
}

//BOUCLE WHILE
//while(condition){
    //ensemble d'instructions
//}

//Exemple
var nb=5;
while(nb<10){//tant que la valeur de nb est strictement inférieure à 10, on exécute l'instruction suivante: 
document.write(nb+" <br>");
nb++; //
}

//exercice boucle while
//J'ai 1000 euros; chaque mois on incrémente de 50 euros. Écrire une boucle pour afficher au bout de combien de mois no atteindra 2000 euro
var argent;
var i;
i=0;
argent=1000;
while(argent<=2000){
    argent=argent+50;//on peut aussi écrire argent+=50
    i=i+1;
}
document.write("le nombre de mois pour passer de 1000 euros à 2000 euros est de "+i+" <br>");

// On peut avoir une valeur d'argent max qui soit saisie  par l'utilisateur, au lieu de rester à 2000
//on utilise par exemple var maxCompte, qui est saisie par l'utilisateur via la fonction prompt
var argent;
var i;
i=0;
argent=1000;
var maxCompte=prompt("Veuillez saisir la valeur maximale à atteindre sur le compte");
while(argent<=maxCompte){
    argent=argent+50;//on peut aussi écrire argent+=50
    //On incrémente ici le compte de 50 euros à chaque itération
    i=i+1;
}
document.write("le nombre de mois pour passer de 1000 euros à "+maxCompte+" euros est de "+i+" <br>");

// On peut également avoir un incrément modifiable par l'utilisateur, et que l'utilisateur saisit par prompt.


// Refaire l'exercice précédent en utilisant la boucle FOR
var argent;
var i;
i=0;
for(var argent=1000;argent<=2000;argent=argent+50){
i=i+1;
}
document.write("le nombre de mois pour passer de 1000 euros à 2000 euros est de "+i+" <br>");

// COURS DE CE LUNDI 30 NOVEMBRE 2020

//La boucle WHILE ********** 
/*syntaxe de DO WHILE
 do{
    instruction1......
    var nb=1;
    }while(condition1);
*/

document.write("<h1>-------------------Boucle WHILE---------------------------</h1>")
var nb1=10;
while(nb1<10){//tant que la valeur de la variable nb1 est inferieure à 10, on exécute ces instructions
    document.write(nb1+"<br>");
    nb1++;    // ----> 8 et 9 vont s'affichen dans la page html
}

document.write("<h3>-------------------Boucle DO WHILE---------------------------</h3>")
//avec DO WHILE, on exécute au moins une fois les instructions avant de vérifier la condition.
var nb2=10;
do{//exécute l'instruction ci-dessous
    document.write(nb2+"<br>");//  ----> 8,9 vont s'afficher dans la page html
    nb2++;
}while(nb2<10); //





