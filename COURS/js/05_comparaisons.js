
var nb1=123;
var nb2="123";

//TEST SUR LA VALEUR SEULE
//L'opérateur de comparaison == signifie ÉGAL A
if(nb1==nb2){//cette condition teste si les valeurs des variables sont égales, l'opérateur == n'effectue de test que SUR LES VALEURS
console.log("les deux valeurs sont égales");
}

// TEST SUR LA VALEUR ET LE TYPE
//L'opérateur de comparaison sur la valeur et sur le type
if(nb1===nb2){// signifie que les deux variables sont strictement égales

    console.log("les deux variables sont identiques en valeur et en type");
}

// Compréhension de la Syntaxe de IF et ELSE
/*
Si la condition est vérifiée, on retourne TRUE, sinon on retourne FALSE
if(true){
    instruction1,instruction2
    else(false)
}
*/

//L'opérateur "DIFFÉRENT A" (not egal) s'écrit: !=
if(nb1!=nb2){// retourne FALSE, il ne va pas exécuter ce bloc d'instructions, il passe aux instructions contenues dans le bloc ELSE.
console.log("ces deux variables ne sont pas égales");

}else{
    console.log("les deux variables sont égales");
}

//L'opérateur "STRICTEMENT DIFFERENT" (en termes de valeur et de type) s'écrit : !==
// il teste sur la valeur ET le type.
if(nb1!==nb2){// retourne TRUE parce qu'ici les deux variables ne sont pas identiques en termes de valeur et de type (ici, ce qui valide la condition c'est le type qui est différent, car nb1 est de type NUMBER et nb2 est de type STRING)
console.log("les deux variables sont strictement différentes");
}else{
console.log("les deux ");   
}



/*SYNTHÈSE
On a 4 opérateurs de comparaison :
== égal à (si la valeur est égale à),
!= not égal à (si la valeur est différente de ),
=== strictement égal à (si la variable est égale en terme de valeur et de type)
!== strictement différent à (ie si la variable est différente de l'autre soit par le type, soit par la valeur, soit par les deux).
*/

/* EXERCICE 

L'objectif de cet exercice est de tester les IMBRICATIONS de CONDITIONS

EXEMPLE AVEC UNE IMBRICATION

var prenom,age;
prenom="Amélie",
age=56;

On arrive sur un système sécurisé où est demandé de saisir le prénom et l'âge pour pouvoir y accéder.
Première étape : saisir le prénom dans une boite de dialogue.
si le prenom est valide, on demande l'age dans une boite de dialogue
Deuxiàme étape : test sur l'age.
si l'age est valide, on accède  à l'espace sécurisé, sinon on affiche des messages d'erreur.
*/

/*
var prenom,age;// Les variables prenom et age sont des valeurs références pour tester ce que l'utilisateur va saisir.
var monPrenom="Amélie";
var monAge=56;
prenom=prompt("Veuillez saisir votre prénom");//il est demandé ici à l'utilisateur de saisir son prénom
//ce qui est saisi par l'utilisateur est sauvegardé dans la variable prenom, afin d'être utilisée par la suite pour le test

if(prenom==monPrenom){
    //si la condition est vraie
    // on teste si le prénom saisi par l'utilisateur est égale à la valeur de monPrenom qui est ici "Amélie".
age=prompt("Bienvenue Amélie, veuillez saisir votre âge");
    if(age==monAge){//si la condition est vraie
    alert("Bonjour Amélie, bienvenue dans votre espace personnel");
    }else{// si l'âge saisi est différent de celui annoncé initialement
        console.log("l'age saisi est incorrect");
        alert("l'age saisi est erroné, veuillez ressaisir votre age");
    }
}
    else{//si la condition n'est pas vraie (prenon==monPrenom)
        console.log("le prénom est incorrect");
        alert("Retour à l'accueil");
    }
*/

//Exemple avec deux imbrications
/*
var prenom,age,motPasse;// Les variables prenom et age sont des valeurs références pour tester ce que l'utilisateur va saisir.
var monPrenom="Amélie";
var monAge=56;
var mdp="admin";
prenom=prompt("Veuillez saisir votre prénom");//il est demandé ici à l'utilisateur de saisir son prénom
//ce qui est saisi par l'utilisateur est sauvegardé dans la variable prenom, afin d'être utilisée par la suite pour le test

if(prenom==monPrenom){
    //si la condition est vraie
    // on teste si le prénom saisi par l'utilisateur est égale à la valeur de monPrenom qui est ici "Amélie".
    age=prompt("Bienvenue Amélie, veuillez saisir votre âge");
    if(age==monAge){//si la condition est vraie
    
        var motPasse=prompt("veuillez saisir votre mot de passe");
        if(motPasse==mdp){
            alert("Bonjour "+prenom+", "+"bienvenue dans votre espace personnel");
        }else{
            console.log("mot de passe incorrect");
            alert("votre mot de passe est incorrect");
        }
    }else{// si l'âge saisi est différent de celui annoncé initialement
        console.log("l'age saisi est incorrect");
        alert("l'age saisi est erroné, veuillez ressaisir votre age");
    }

}
else{//si la condition n'est pas vraie (prenon==monPrenom)
console.log("le prénom est incorrect");
alert("Retour à l'accueil");
}
*/
//BOITE de DIALOGUE confirm
// cette boite de dialogue ne récupère pas la valeur saisie par l'utilisateur, mais renvoie "true" si la réponse est "oui", sinon elle renvoie "false".
//Elle renvoie donc une valeur booléenne.
/*
var dev=confirm("aimez-vous le développement");
if(dev==true){
    console.log("c'est génial !!!");
}else{
    console.log("c'est fort dommage");
}
*/

//On va tester une condition imbriquée
var dvp=confirm("aimez-vous le développement");// confirme une demande, soit OUI, soit ANNULER
if(dvp==true){// si on retourne TRUE, les exécutions ci-dessous du bloc IF sont exécutées
    document.write("c'est génial !!!");

    var jvs=confirm("aimez-vous le javascript?");
    if(jvs==true){
        document.write("Bienvenue au Club des Experts");
    }else{
        document.write("Dommage, le javascript vous permet d'animer des pages web");
    }
}else{// si on ici signifie que le test if(dvp==true)  a donné "false"
    console.log("c'est fort dommage");
}

