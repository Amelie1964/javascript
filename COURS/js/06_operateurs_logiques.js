//LES OPÉRATEURS LOGIQUES

//Les opérateurs logiques sont :ET, OU, NON

//ET(AND)==> l'opérateur s'écrit && : on cumule plusieurs conditions en même temps;
//OU(OR) ==> l'opérateur s'écrit || : renvoie la valeur TRUE si au moins une des conditions est TRUE
//NON(NOT)==> l'opérateur s'écrit !

//EXEMPLE
var login="admin";
var mdp="admin";
if(login=="admin" && mdp=="admin"){// si l'une des deux variables est différentes, la condition ne sera pas validée
//si login est correct et mdp n'est pas correct, ça renvoie FALSE et on ne passe pas.
// si login est incorrect et mdp est correct, ça renvoie FALSE  et on ne passe pas.
//si login est incorrect et mdp est incorrect, ça renvoie FALSE et on ne passe pas.
}
/*--------------Opérateur OU(OR)-----------------*/

if(login=="admin" || mdp=="admin"){//si au moins une condition est validée, ça renvoie TRUE

}

/*-----------Opérateur NON(NOT)----------------*/

if(!(login=="admin" && mdp=="admin")){//si les deux conditions ne sont pas vérifiées, ça renvoie TRUE.

}

if(!(login=="admin" || mdp=="admin")){
console.log()
}

if((A)&&(B)){
//si A est vrai et B est vrai=> renvoie TRUE
// si A est vrai et B est faux => renvoie FALSE
//si A est faux et B est vrai => renvoie FALSE
//si A est faux et B est faux => renvoie FALSE
}

if((A)||(B)){
//si A est vrai et B est vrai=> renvoie TRUE
// si A est vrai et B est faux => renvoie TRUE
//si A est faux et B est vrai => renvoie TRUE
//si A est faux et B est faux => renvoie FALSE
}

if(!(A)&&(B)){
//si A est vrai et B est vrai=> renvoie FALSE
// si A est vrai et B est faux => renvoie FALSE
//si A est faux et B est vrai => renvoie FALSE
//si A est faux et B est faux => renvoie TRUE
}