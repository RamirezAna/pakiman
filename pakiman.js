class Pakiman
{
  constructor(nomb,vid,ataq)
  {
    this.imagen =  new Image();
    this.nombre = nomb;
    this.vida=vid;
    this.ataque= ataq;

    this.imagen.src = imagenes [this.nombre];
  }

  hablar()
  {
     alert(this.nombre);
  }

  mostrar()
  {
    document.write("<p>"); //apertura
    document.body.appendChild(this.imagen); //agregar una img - appendChild
    document.write("<strong>"+ this.nombre +"</strong> <br />");
    document.write("Vida: "+ this.vida + " ");
    document.write("Ataque: "+ this.ataque + "<hr>");
    document.write("</p>");
  }
  
}
