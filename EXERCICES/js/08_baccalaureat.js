// EXERCICE du BACCALAURÉAT

var moy;
var moy=parseInt(prompt("Veuillez saisir votre moyenne"));// Déclaration et affectation de la variable moyenne

//Analyse de la moyenne
if(moy>=12 && moy<=20){
    document.write("votre moyenne est de "+moy+": Félicitations!! Vous êtes reçu avec mention."+" <br>");
}else if(moy<10){
document.write("votre moyenne est de "+moy+". Vous êtes malheureusement recalé."+" <br>");
}else if(moy<12){
    document.write("Votre moyenne est de "+moy+": vous êtes reçu.");

}else{
    document.write("Attention !! La valeur saisie "+moy+" est incorrecte. Veuillez recommencer la saisie.");
}

// CORRECTION
// Demander à l'usager de saisir la moyenne
var moyenne=prompt("saisissez votre moyenne");
if(moyenne<10){
    document.write("Dommage, tu es recalé");
    }else if(moyenne>=10 && moyenne<12){
        document.write("Super, tu passes!");//j'affiche que le cad
    }else if(moyenne>=12 && moyenne<=20){
    document.write("Bravo pour la mention!");
}else{
    document.write("la valeur saisie est incorrecte");
}

//En utilisant la fonction isNaN(x)
if(isNaN(moyenne)){// "la moyenne n'est pas un nombre" n'est pas vérifiée, par conséquent, ici on envoie le message d'erreur
document.write("la valeur saisie n'est pas un nombre");

    }else if((moyenne>=10) && (moyenne<12)){
        document.write("Super,tu passes.")
    }else if(moyenne>=12 && moyenne<=20){
        document.write("Bravo pour la mention");
    }else if(moyenne<10){
    document.write("Dommage, tu es recalé");

}else{
    document.write("le nombre saisi est hors intervalle valide");
}



//En utilisant not(isNaN(x))
if(!isNaN(moyenne)){// "la moyenne est un nombre" est vérifiée, par conséquent on peut dérouler tous les critères sur la variable "moyenne"
    }else if(moyenne<10){
    document.write("Dommage, tu es recalé");
    }else if(moyenne>=10 && moyenne<12){
        document.write("Super, tu passes!");//j'affiche que le candidat passe
    }else if(moyenne>=12 && moyenne<=20){// sinon, si la moyenne est supérieure à 12
    document.write("Bravo pour la mention!");// J'affiche qu'il a réussi avec mention
    
}else {document.write("la valeur saisie n'est pas un nombre");
}
