
var mult;
var nombre=parseInt(prompt("veuillez saisir un nombre"));
for(i=1;i<=10;i++){
    mult=nombre*i;
    document.write(nombre+" x "+i+" = "+mult+"<br>");



var mult;
var nombre=parseInt(prompt("veuillez saisir un nombre")); 

if(nombre>=2 && nombre<=9){
    for(i=1;i<=10;i++){
        mult=nombre*i;
        document.write(nombre+" x "+i+" = "+mult+"<br>");
    }
}else{
    document.write("la valeur saisie est incorrecte");
}
}
