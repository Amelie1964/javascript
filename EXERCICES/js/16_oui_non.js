

var compteur=0;
var reponse=prompt("veuillez saisir la réponse");
while(reponse!=="oui" && reponse!=="non"){
    var reponse=prompt("veuillez saisir la réponse");
    document.write("vous avez saisi la réponse "+reponse+"<br>");
    compteur++;
}

compteur=compteur-1;
document.write("vous avez saisi "+compteur+" fois des réponses différentes de Oui ou de Non");

///////////////////////////////////////

// Correction
//En effet, le premier mot saisi n'est pa affiché, seuls le sont ceux qui sont traités dans la boucle "While".

var reponse="";
var compteur=0;
var reponse=prompt("dis-moi OUI ou NON");
while(reponse!=="oui" && reponse!=="non")
var reponse=prompt("Dis-moi OUI ou NON ");
document.write(reponse+" pour le" +compteur+"   fois,dis-moi OUI ou NON)
compteur++;