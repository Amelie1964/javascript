
var nombre1;
var nombre2;

//saisie de la valeur de nombre1
nombre1=prompt("saisir le premier nombre");
//saisie de la valeur de nombre2
nombre2=prompt("saisir le deuxième nombre");
// affichages des valeurs initiales de nombre1 et nombre2
alert("la valeur initiale du premier nombre: "+nombre1+" et la valeur initiale du deuxième nombre: "+nombre2);

//sauvegarde de nombre1 dans une variable tampon
tampon=nombre1;
nombre1=nombre2;
nombre2=tampon;
//affichage des nombres permutés dans la console
console.log(nombre1);
console.log(nombre2);
//affichage des valeurs permutées dans le fichier html
document.write("la valeur permutée de nombre1 est :" +nombre1+ "<br>"+"et la valeur permutée de nombre2 est :" +nombre2+ "<br>");

//affichage des valeurs permutées
alert("la valeur permutée du premier nombre: "+nombre1+" et la valeur permutée du deuxième nombre: "+nombre2);

