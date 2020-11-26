//COMPARAISON de DEUX NOMBRES
var nb1;
var nb2;
var nb1=parseInt(prompt("Veuillez saisir le premier nombre"));
var nb2=parseInt(prompt("Veuillez saisir le deuxième nombre"));

// Analyse des conditions
if (nb1>nb2){
    document.write("le premier nombre "+nb1+" est supérieur au deuxième nombre "+nb2+" <br>");
}else if(nb1==nb2){//bien utiliser l'opérateur 
    document.write("le premier nombre "+nb1+" est bien égal au deuxième nombre "+nb2+" <br>");
}else if(nb1<nb2){
    document.write("le premier nombre "+nb1+" est inférieur au deuxième nombre "+nb2+" <br>");
}else{
    alert("échec de comparaison: vous n'avez pas saisi de nombres");
}


// FAisons maintenant le test pour vérifier que les variables saisies pour faire le test sont des nombres, afin de dérouler le script pour tous les cas où la condition IF est vérifiée (ie où les valeurs saisies sont des nombres), et traiter les autres cas dans la partie ELSE où la condition n'est pas vérifiée.

//On va utiliser la fonction isNaN(x) "is Not a Number"
//isNaN renvoie true si la variable n'est pas un nombre.
//Nous voulons tester que la variable est un nombre pour dérouler, on va donc utiliser !isNaN(x) qui elle va donc tester  que x est un nombre.
//Ce qui donne :
if((!isNaN(nb1)) && (!isNaN(nb2))){
        if (nb1>nb2){
            document.write("le premier nombre "+nb1+" est supérieur au deuxième nombre "+nb2+" <br>");
        }else if(nb1==nb2){//bien utiliser l'opérateur == qui est l'opérateur de comparaison
            document.write("le premier nombre "+nb1+" est bien égal au deuxième nombre "+nb2+" <br>");
        }else if(nb1<nb2){
            document.write("le premier nombre "+nb1+" est inférieur au deuxième nombre "+nb2+" <br>");
    }else{
    alert("échec de comparaison: vous n'avez pas saisi de nombres");  
    }
}

//Autre manière de faire le test.

if((!isNaN(nb1)) && (!isNaN(nb2))){//début de condition1
    else if(nb1<nb2){
        document.write("le premier chiffre est inférieur au deuxième chiffre");
    }else if(nb1>nb2){
        document.write("le premier chiffre est supérieur au deuxième chiffre");  
    }else if(nb1==nb2){
        document.write("les deux nombres sont égaux");
    /*}else{//tous les cas d'échec(les cas qui ne sont pas traités ou bien les autres possibilités)
    //ocument.write("vous n'avez pas saisi de chiffres()");
        //}
        */
    /* la fin de la condition1 */}else{
        console.log("vous n'avez pas saisi de chiffres");
    }
}
