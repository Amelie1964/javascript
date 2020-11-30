
var nombre;//déclaration de la variable "nombre".
var max;//déclaration de la variable "max" qui sera la valeur saisie par l'utilisateur.
var max=parseInt(prompt("Veuillez saisir un nombre"));//saisir un nombre (on utilise ParseInt pour s'assurer que la valeur saisie soit de type NUMBER et non pas STRING)
document.write("<h3>Le nombre saisi est "+max+", et je regarde la parité de tous les nombres qui lui sont inférieurs ou égaux.</h3>");
for(nombre=1;nombre<=max;nombre++){
    if(nombre%2==0){

        document.write("le nombre "+nombre+" est pair"+"<br>");
    }else{
        document.write("le nombre "+nombre+" est impair"+"<br>");
    }
}


//On affiche cette fois les nombres supérieurs à la valeur saisie et inférieurs à cette valeur majorée de 10.
var nombre; //déclaration de la variable "nombre".
var max; //déclaration de la variable "max" qui sera la valeur saisie par l'utilisateur.
var max=parseInt(prompt("Veuillez saisir un nombre"));//On invite l'utilisateur à saisir un nombre.
document.write("<h3>Le nombre saisi est "+max+", et je regarde la parité de tous les nombres qui lui sont supérieurs ou égaux.</h3>");
for(nombre=max;nombre<=max+10;nombre++){// la variable "nombre" va varier de max à max+10, et s'incrémentera de 1 à chaque fois.
    if(nombre%2==0){// si le nombre est pair on effectue l'instruction ci-dessous
        document.write("le nombre "+nombre+" est pair"+"<br>");
    }else{//si le nombre est impair, on effectue l'instruction ci-dessous.
        document.write("le nombre "+nombre+" est impair"+"<br>");
    }
}

// On peut faire le test sur le type de la valeur saisie par l'utilisateur en utilisant !isNaN(x) ---> TRUE si x est un number.
var nombre;
var max;
var max=parseInt(prompt("Veuillez saisir un nombre"));//On invite l'utilisateur à saisir un nombre.
document.write("<h3>Le nombre saisi est "+max+", et je regarde la parité de tous les nombres qui lui sont supérieurs ou égaux.</h3>");

if(!isNaN(max)){
    for(nombre=max;nombre<=max+10;nombre++){
        if(nombre%2==0){// si le nombre est pair on effectue l'instruction ci-dessous
            document.write("le nombre "+nombre+" est pair"+"<br>");
        }else{//si le nombre est impair, on effectue l'instruction ci-dessous.
            document.write("le nombre "+nombre+" est impair"+"<br>");
        }
    }
}else{
    document.write("<h5> Erreur : la valeur saisie n'est pas un nombre</h5>");
}

// On peut faire le test sur le type de la valeur saisie par l'utilisateur en utilisant isNaN(x) ---> FALSE si x est un number.


var nombre;
var max;
var max=parseInt(prompt("Veuillez saisir un nombre"));//On invite l'utilisateur à saisir un nombre.
document.write("<h3>Le nombre saisi est "+max+", et je regarde la parité de tous les nombres qui lui sont supérieurs ou égaux.</h3>");

if(isNaN(max)){//renvoie FALSE car max est un nombre.
document.write("<h5> Erreur : la valeur saisie n'est pas un nombre</h5>");
}else{//renvoie TRUE car max est un nombre
    for(nombre=max;nombre<=max+10;nombre++){
        if(nombre%2==0){// si le nombre est pair on effectue l'instruction ci-dessous
            document.write("le nombre "+nombre+" est pair"+"<br>");
        }else{//si le nombre est impair, on effectue l'instruction ci-dessous.
            document.write("le nombre "+nombre+" est impair"+"<br>");
        }
    }
}


// à noter :

//si on déclare la variable "tour" initialement:
//var tour;
//for(tour=1;tour<=10;tour++) // on n'a plus besoin de mettre var devant "tour", car la variable "tour" a déjà été déclarée.

//si on ne déclare pas une variable dès le départ, on peut la déclarer et l'affecter en une seule fois quand on l'utilise comme argument dans une fonction.
//Par exemple :
//si on ne déclare pas tour initialement
//for(var tour=1;tour<=10;tour++) 

