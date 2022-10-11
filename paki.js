var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";


var coleccion = [];
coleccion.push(new Pakiman("Cauchin",100,30));
coleccion.push(new Pakiman("Pokacho",80,20));
coleccion.push(new Pakiman("Tocinauro",80,20));

//in => itera sobre el indice del array
//of => itera sobre el objeto del array
for(var i of coleccion)   //of es lo mismo que in , recorre segun la cantidad que tena coleccion
{
    i.mostrar();
}

for(var x in coleccion[0])
{
    console.log(x);
}
