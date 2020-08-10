/*
1)De 5  personas que ingresan al hospital se deben tomar y 
validar los siguientes datos.
nombre ,peso, sexo y edad.
a)informar la cantidad de mujeres.
b)la edad promedio en total.
c)el hombre mas pesado.
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar() {

	let cNombre;
	let nPeso;
	let cSexo;
	let nEdad;
	let cNombreHombrePesado;


	let nMujeres = 0;
	let nPromedioEdad = 0;
	let nPesoHombrePesado = 0;

	
	for (let i = 1; i <= 5; i++) {

		cNombre = prompt("Ingrese el nombre del paciente...");
		while (cNombre == "") {
			cNombre = prompt("Debe Ingresar un nombre - Ingrese el nombre del paciente...");
		}

		nPeso = parseInt(prompt("Ingrese el peso del paciente..."));
		while (nPeso < 1 || isNaN(nPeso)) {
			nPeso = parseInt(prompt("Peso debe ser mayor a cero - Ingrese el peso del paciente..."));
		}

		cSexo = prompt("Ingrese el sexo...f para Femenino - m para Masculino");
		cSexo = cSexo.toLowerCase();
		while (cSexo != 'f' && cSexo != 'm') {
			cSexo = prompt("Sexo Invalido...Ingrese el sexo...f para Femenino - m para Masculino...");
		}
		if (cSexo == 'f') {
			nMujeres++;
		}
		else if (nPeso > nPesoHombrePesado) {
			nPesoHombrePesado = nPeso;
			cNombreHombrePesado = cNombre;
		}
		nEdad = parseInt(prompt("Ingrese la edad del paciente..."));
		while (nEdad < 1 || isNaN(nEdad)) {
			nEdad = parseInt(prompt("Edad debe ser mayor a cero - Ingrese la edad del paciente..."));
		}
		nPromedioEdad += nEdad;

	}
	
	console.log("La Cantidad de Mujeres es " + nMujeres);
	console.log("La edad promedio de los pacientes es " + nPromedioEdad / 5);
	console.log("El hombre mas pesado es " + cNombreHombrePesado + " con " + nPesoHombrePesado + " kgs.");
}
