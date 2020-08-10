/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
 validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más barato de los sólidos
*/function mostrar() {

  let cRespuesta;
  let nPrecio;
  let nPeso;
  let cMarca;
  let cTipo;
  let cMarcaCaroLiquido;
  let cMarcaBaratoSolido;


  let nPesoTotal = 0;
  let nMarcaCaroLiquidoPrecio = 0;
  let nMarcaBaratoSolidoPrecio = 0;

  let lFlag = 0;
  let lFlagMasBarato=0;
  do {

    cMarca = prompt("Ingrese la marca...");
    while (cMarca == "") {
      cMarca = prompt("Debe Ingresar una marca...");
    }

    nPrecio = parseFloat(prompt("Ingrese el precio..."));
    while (!(nPrecio > 0)) {
      nPrecio = parseInt(prompt("Precio invalido - Ingrese el precio (Mayor a $0.-)..."));
    }

    nPeso = parseInt(prompt("Ingrese el peso del producto..."));
    while (nPeso < 1 || isNaN(nPeso)) {
      nPeso = parseInt(prompt("Peso debe ser mayor a cero - Ingrese el peso del producto..."));
    }

    cTipo = prompt("Ingreso el tipo (liquido o solido)...");
    cTipo = cTipo.toLowerCase();
    while (cTipo != "liquido" && cTipo != "solido") {
      cTipo = prompt("Tipo Invalido - Ingreso el tipo (liquido o solido)...");
      cTipo = cTipo.toLowerCase();
    }
    //calculos
    nPesoTotal += nPeso;

    switch (cTipo) {
      case "liquido":
        if (nPrecio>nMarcaCaroLiquidoPrecio){
          cMarcaCaroLiquido=cMarca;
          nMarcaCaroLiquidoPrecio=nPrecio;
        }

        break;
      case "solido":
        if (nPrecio<nMarcaBaratoSolidoPrecio && lFlagMasBarato){
          cMarcaBaratoSolido=cMarca;
          nMarcaBaratoSolidoPrecio=nPrecio;
        }
        else{
          cMarcaBaratoSolido=cMarca;
          nMarcaBaratoSolidoPrecio=nPrecio;
        }
        break;

    }

    cRespuesta = prompt("Desea continuar ingresando productos? (Ingrese s para continuar)...");
    cRespuesta = cRespuesta.toLowerCase();
    if (cRespuesta != 's') {
      lFlag = 1;
    }
    
  } while (!lFlag);
  
  console.log("El peso total de los productos es "+nPesoTotal+" kgs.");
  console.log("La marca del liquido mas caro es "+cMarcaCaroLiquido+" de $"+nMarcaCaroLiquidoPrecio);
  console.log("La marca del solido mas barato es "+cMarcaBaratoSolido+" de $"+nMarcaBaratoSolidoPrecio);
  



}
