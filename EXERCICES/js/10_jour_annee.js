var mois;//déclaration de la valeur mois
//Dans cet exercice, on va tester les mois par leur ordre :
//par exemple, pour Janvier, on utilise 1
//par exemple, pour Décembre, on utilise 12.

mois=prompt("Veuillez saisir le nom du mois");
if(mois==1 || mois==3 || mois==5 || mois==7 || mois==8 || mois==10 || mois==12){
    document.write("ce mois contient 31 jours."); 
}else if(mois==2){
    document.write("ce mois contient 28 jours.");
}else if(mois==4 || mois==6 || mois==9 || mois==11){
document.write("ce mois contient 30 jours.")
}else{
    document.write("le mois saisi est erroné");
}