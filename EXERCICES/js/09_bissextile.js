// TEST DES ANNÉES BISSEXTILES

var annee;
var annee=parseInt(prompt("Veuillez saisir l'année"));

//soit l'année est divisible par 4 et n'est pas divisible par 100: (annee%4=0 && annee%100!=0)
//soit l'annee est divisible par 400 : (annee%400=0)

//on regroupe00 ces deux conditions par l'opérateur OU (||)
// ( (annee%4=0 && annee%100!=0) || (annee%400=0) )

if(!isNaN(annee)){ // on exécute cette condition si et seulement si la variable annee est de type number
        if ((annee%4==0 && annee%100!=0) ||(annee%400==0)){
        document.write("l'année "+annee+" est bissextile");
        }else{
            document.write("l'année "+ annee+" n'est pas bissextile");
        }
}else{// on exécute cette instruction si la variable année n'est pas de type number
    document.write("la valeur de l'année n'est pas un nombre");
}

//