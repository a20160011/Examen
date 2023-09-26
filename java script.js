var nombre = prompt("Esta es la Trivia de la primavera. Escribe tu nombre:");

var p1 = prompt("¿En que departamento se encuentra el lago titicaca?\nA: TACNA\nB:PUNO\nC: CUSCO");

var c = 0;
var i = 0;
if(p1 == "B"){
 c = c + 1;
}else if(p1 == "A"){
   i = i + 1;
} else if (p1 == "C"){
 i = i + 1;
}else{
    alert("No es una opción válida");
}


var p2 = prompt ("¿Desde qué parte del Perú se pueden avistar ballenas jorobadas?\nA: Lima e Ica \nB: Arequipa y tacna\nC: Piura y Tumbes");


if(p2 == "C"){
 c = c + 1;
}else if(p2 == "B"){
   i = i + 1;
} else if (p2 == "A"){
 i = i + 1;
}else{
    alert("No es una opción válida");
}


var p3 = prompt ("Plato típico de la Selva peruana\nA: Tacacho con cecina\nB: Arroz con pollo\nC:Lomo saltado");


if(p3 == "A"){
 c = c + 1;
}else if(p3 == "C"){
   i = i + 1;
} else if (p3 == "B"){
 i = i + 1;
}else{
    alert("No es una opción válida");
}



if (c> i){
    document.write(nombre + ", has completado exitosamente el test <br>");
    document.write("Correctas"+ c);
document.write("Incorrectas" + i);
}else if (c<i){
    document.write(nombre + ", has presentado problemas en el test <br>");
    document.write("Correctas "+c):
    document.write ("Incorrectas:" + i)
}else{
    document.write(nombre + ", Tu test esta a medias <br>");
    document.write("Correctas "+c):
    document.write ("Incorrectas:"+ i);
}
