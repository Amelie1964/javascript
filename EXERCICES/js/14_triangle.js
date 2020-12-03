//var diese; Cette ligne devient redondante car il y a en ligne 3 une déclaration ET une affectation.
//var compteur; idem pour cette ligne car en ligne 4, il y a dja une déclaration ET une affectation.
var compteur=1;
var diese=""
while(compteur>0 && compteur<=7){
diese=diese+"#";
document.write(diese+"<br>");
compteur++;
}