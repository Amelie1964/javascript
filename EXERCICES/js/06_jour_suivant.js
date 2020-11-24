//EXERCICE d'application de plusieurs IF ELSE
//Créer une condition qui invite à saisir le jour et il affiche un message indiquant quel est le jour suivant, et dans le cas contraire, le message affiché doit être un message d'erreur
var jour;
var jour1="Lundi";
var jour2="Mardi";
var jour3="Mercredi";
var jour4="Jeudi";
var jour5="Vendredi";
var jour6="Samedi";
var jour7="Dimanche";

jour=prompt("veuillez saisir le jour");
if(jour==jour1){
document.write("nous sommes aujourd'hui "+jour+", demain nous serons "+jour2+"<br>");
}else if(jour==jour2){
    document.write("nous sommes aujourd'hui "+jour+", demain nous serons "+jour3+"<br>");
}else if(jour==jour3){
    document.write("nous sommes aujourd'hui "+jour+", demain nous serons"+jour4+"<br>");
}else if(jour==jour4){
    document.write("nous sommes aujourd'hui "+jour+", demain nous serons "+jour5+"<br>");
}else if(jour==jour5){
    document.write("nous sommes aujourd'hui "+jour+", demain nous serons "+jour6+"<br>");  
}else if(jour==jour6){
    document.write("nous sommes aujourd'hui "+jour+", demain nous serons "+jour7+"<br>");  
}else if(jour==jour7){
    document.write("nous sommes aujourd'hui "+jour+", demain nous serons "+jour1+"<br>");      
}else{
    document.write("le nom du jour est erroné");
}