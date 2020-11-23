//LES CONDITIONS SIMPLES

//La syntaxe des conditions est un bloc ayant la syntaxe suivante : SI (condition vraie) instruction1 SINON Instruction2.
//L'instruction if exécute une instruction si une condition donnée est vraie ou équivalente à vrai. Si la condition n'est pas vérifiée, on utilise une autre instruction.
/*if(condition)
instruction
else
autre instruction


//EXEMPLE 
/*
var nb1=20;
if (nb1<50){// ici les accolades contiennent les instructions relatives  à condition vraie pour if
//les instructions peuvent peuvent être nombreuses
console.log("le nb1 est inférieur à 50");
}else{
    //  si la condition if n'est pas vraie, on exécute les instructions contenues dans le bloc sinon (else)
    console.log("le nb1 est supérieur ou égal à 50");
}



//EXEMPLE de TEST sur L'AGE
var age;
age=prompt("saisir l'age");
if (age<18){
    alert("Bonjour, vous avez "+age +" ans"+" : vous êtes mineur(e).");
}else{
    alert("Bienvenue, vous avez "+age+" ans"+" : vous êtes bien majeur(e) !!!");
}
// le test produit le même résultat si la condition du test est (age>=18), car dans ce cas

// LES CONDITIONS MULTIPLES

//La syntaxe est la suivante:
/*
if(){

}else if(){
    
}else if(){

}else if(){

}
else(){

}
*/


//Exemple de la réussite à un examen

var moyenne;
moyenne=prompt("saisir la note de moyenne générale");

if(moyenne<9){
alert("Vous n'avez pas réussi à cet examen");
}else if(moyenne<10){
   alert("vous êtes admissible"); 
}else{
    alert("vous avez réussi, FELICITATIONS !!!!");
}