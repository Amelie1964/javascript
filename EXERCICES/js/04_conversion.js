// CONVERSION de CELSIUS EN FAHRENHEIT

alert("Calcul des degrés Fahrenheit à partir des degrés Celsius");
//Déclaration des variables
var tempC1; //Degré Celsius
var tempF1;//Degré Fahrenheit

//Saisie de la Température en Celsius
tempC1=prompt("Veuillez saisir la Température en degré Celsius:");

// Définition de la Température en degré Fahrenheit
tempF1=32+tempC1*1.8; 
//Affichage de la température en degré Fahrenheit dans la console
console.log(tempF1);
//Ecriture dans le fichier Html
document.write(tempF1 + "<br>");
//Affichage de la température en degré Frahrenheit dans une boîte de dialogue
alert("La température est de: " +tempF1+"°F.");


// CONVERSION de FAHRENHEIT EN CELSIUS

alert("Calcul des degrés Fahrenheit à partir des degrés Celsius");
//Déclaration des variables
var tempC2; // Degré Celsius
var tempF2; //Degré Fahrenheit

//Saisie de la Température en Celsius
tempF2=prompt("Veuillez saisir la Température en degré Fahrenheit:");

// Définition de la Température en degré Fahrenheit
tempC2=(tempF2-32)/1.8; 

//Affichage de la température en degré Fahrenheit dans la console
console.log(tempC2);

//Ecriture dans le fichier Html
document.write(tempC2 + "<br>");

//Affichage de la température en degré Frahrenheit dans une boîte de dialogue
alert("La température est de: " +tempC2+"°F.");


