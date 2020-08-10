/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados. 
sexo del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el sexo de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar() {
	let cRespuesta;
	let cSexo;
	let cLugar;
	let cTemporada;
	let nPasajeros;
	let cMasPasajerosSexo;
	let cMasElegido;

	let nAcumLugarBariloche = 0;
	let nAcumLugarCataratas = 0;
	let nAcumLugarSalta = 0;
	let nMasPasajeros = 0;
	let nPromedioPasajerosInv = 0;
	let nInvierno = 0;


	let lFlag = 0;


	do {


		cSexo = prompt("Ingrese el sexo del titular...f para Femenino - m para Masculino");
		cSexo = cSexo.toLowerCase();
		while (cSexo != 'f' && cSexo != 'm') {
			cSexo = prompt("Sexo Invalido...Ingrese el sexo del titular...f para Femenino - m para Masculino...");
		}

		cLugar = prompt("Ingreso el lugar de destino (Bariloche - Cataratas - Salta)...");
		cLugar = cLugar.toLowerCase();
		while (cLugar != "bariloche" && cLugar != "cataratas" && cLugar != "salta") {
			cLugar = prompt("Lugar Invalido - Ingreso el lugar de destino (Bariloche - Cataratas - Salta)...");
			cLugar = cLugar.toLowerCase();
		}
		cTemporada = prompt("Ingrese la temporada (Otonio - Invierno - Verano - Primavera)...");
		cTemporada = cTemporada.toLowerCase();
		while (cTemporada != "otonio" && cTemporada != "invierno" && cTemporada != "verano" && cTemporada != "primavera") {
			cTemporada = prompt("Temporada Invalida - Ingreso la temporada (Otonio - Invierno - Verano - Primavera)");
			cTemporada = cTemporada.toLowerCase();
		}

		nPasajeros = parseFloat(prompt("Ingrese la cantidad de pasajeros..."));
		while (!(nPasajeros > 0)) {
			nPasajeros = parseInt(prompt("Valor invalido - Ingrese la cantidad de pasajeros (Mayor a 0)..."));
		}


		//calculos

		switch (cLugar) {
			case "bariloche":
				nAcumLugarBariloche++;
				break;
			case "cataratas":
				nAcumLugarCataratas++;
				break;
			case "salta":
				nAcumLugarSalta++;
				break;

		}

		// mas pasajeros
		if (nPasajeros > nMasPasajeros) {
			nMasPasajeros = nPasajeros;
			cMasPasajerosSexo = cSexo;
		}

		//
		if (cTemporada == "invierno") {
			nPromedioPasajerosInv += nPasajeros;
			nInvierno++;
		}

		cRespuesta = prompt("Desea continuar ingresando estadias? (Ingrese s para continuar)...");
		cRespuesta = cRespuesta.toLowerCase();
		if (cRespuesta != 's') {
			lFlag = 1;
		}

	} while (!lFlag);



	if (nAcumLugarBariloche > nAcumLugarCataratas && nAcumLugarBariloche > nAcumLugarSalta) {
		// mayor bariloche
		cMasElegido = "Bariloche";
	} else if (nAcumLugarCataratas > nAcumLugarBariloche && nAcumLugarCataratas > nAcumLugarSalta) {
		// mayor cataratas
		cMasElegido = "Cataratas";
	}
	else {
		// mayor salta
		cMasElegido = "Salta";
	}


	console.log("El lugar mas elegido es " + cMasElegido);

	if (cMasPasajerosSexo=='f') {
		console.log("El Sexo del Titular con mas pasajeros es Femenino con " + nMasPasajeros);	
	}
	else{
		console.log("El Sexo del Titular con mas pasajeros es Masculino con "+ nMasPasajeros);	
	}

	if (nInvierno > 0) {
		console.log("El Promedio de Pasajeros en Invierno es " + nPromedioPasajerosInv / nInvierno);
	}
	else {
		console.log("El Promedio de Pasajeros no se puede calcular - Nadie viajo en invierno");
	}

}
