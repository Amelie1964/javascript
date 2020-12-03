//L'intervalle de test est [50-100] : on cherche à afficher un message d'invitation à ressaisir la variable si elle est en dehors de [50 - 100]
/*
var nombre;
var nombre=parseInt(prompt("Veuillez saisir un nombre"));
while(nombre<50 || nombre>100){//début de la boucle
    document.write("le chiffre saisi "+nombre+" est en dehors de l'intervalle de test"+"<br>");
    var nombre=parseInt(prompt("Veuillez saisir un nombre"));
}//Fin de la boucle
*/

//L'intervalle de test est ]50 - 100[ : on cherche à afficher un message d'invitation à ressaisir le nombre tant que celui-ci est en dehors de ]50 - 100[, ie tant que le nombre est compris entre [50 - 100]
var nombre2;
var nombre2=parseInt(prompt("Veuillez saisir un nombre"));
while(!(nombre2>=50 && nombre2<=100)){//début de la boucle
    document.write("le chiffre saisi "+nombre2+" est en dehors de l'intervalle de test"+"<br>");
    var nombre2=parseInt(prompt("Veuillez saisir un nombre"));
}//Fin de la boucle

