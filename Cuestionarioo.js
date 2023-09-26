var Nombre = parseInt(prompt("Esta es la Trivia de la primavera. Escribe tu nombre:"));

var p1 = parseInt(prompt("¿En que departamento se encuentra el lago titicaca?\nA: TACNA\nB:PUNO\nC: CUSCO"));

var c = 0;
var i = 0;
if(p2 == "B"){
 c = c + 1;
}else if(p2 == "A"){
   i = i + 1;
} else if (p2 == "C"){
 i = i + 1;
}else{
    alert("No es una opción válida");
}

var p2 = parseInt(prompt ("¿Desde qué parte del Perú se pueden avistar ballenas jorobadas?\nA: Lima e Ica \nB: Arequipa y tacna\nC: Piura y Tumbes"));

var c = 0;
var i = 0;
if(p2 == "B"){
 c = c + 1;
}else if(p2 == "A"){
   i = i + 1;
} else if (p2 == "C"){
 i = i + 1;
}else{
    alert("No es una opción válida");
}

var p3 = parseInt(prompt ("Plato típico de la Selva peruana\nA: Tacacho con cecina\nB: Arroz con pollo\nC:Lomo saltado"));

var c = 0;
var i = 0;
if(p3 == "B"){
 c = c + 1;
}else if(p3 == "A"){
   i = i + 1;
} else if (p3 == "C"){
 i = i + 1;
}else{
    alert("No es una opción válida");
}

alert("Buena man");
console.log("Precio de la entrada: "+entrada);
console.log("Precio del segundo plato: "+segundo);
console.log("Precio del postre: "+postre);
console.log("Monto sin IGV:" +montoparcial);
console.log("IGV:" + igv);
console.log("Total de la cuenta: "+totalfinal);

