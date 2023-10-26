const fs = require('fs');

function revisarExpresion(expresion) {
	const componentes = []; //arreglo donde almacenara los componentes encontrados
	let index = 0;

	//funcion para validar los componentes validos
	function obtenercomponente() {
		// esta expresion regular esta diseñada para analizar y dividir en diferentes partes un texto
		//las / indican el inicio y fin de lo que se quiere analizar
		// \s identifica los espacios en blanco o los ceros
		//esta expresion ('(?:\\'|[^'])*') identifica una cadena entre comillas y que puede incluir cualquier otra cadena que no sea comillas
		// |\w+ esta expresion identifica palabras que pueden tener letras y numeros
		// |[(),] esta identifica parentesis y comas
		// |. esta expresion identifica cualquier caracter que no se indentifique a las anteriores
		// \s* identifica los ceros y cualquier espacio en blanco que este despues de cada componente encontrado
		//y la g indica que la expresion debe realizarse a todo el texto.
		const cadena = /\s*('(?:\\'|[^'])*'|\w+|[(),]|.)\s*/g;
		//Cada letra que encuentre la expReg se va a ir almacenando en la variable cadena
		cadena.lastIndex = index;
		const conexion = cadena.exec(expresion);

		if(conexion){
			const componente = conexion[1];
			index = cadena.lastIndex;
			return componente;
		}
		return null;
	}
 //en esta funcion se asegura de recorrer toda la expresion
	function analizar(){
		let componente
		var comillas = /['"]/g
		while((componente = obtenercomponente())){
			//esta expresion encuentra las comillas que tenga el componente encontrado y regresa cada comilla en un arreglo
			var comilla = componente.match(comillas)
			//esta expresion elimina las comillas simples y dobles que tenga la palabra encotrada y solo regresa la palabra sin comillas
			var palabraSinComillas = componente.replace(/['"]/g, '')
			if (comilla) {
				//mapea el arreglo de las comillas y la pasa una por una al arreglo principal(componentes), esto solo si encontro comillas y agrega la palabra por separado
				for (let i = 0; i < comilla.length; i++) {
				  componentes.push(comilla[i])
				}
   				 componentes.push(palabraSinComillas)
			  }else{
			  	componentes.push(componente)
			  }
			
		}
	}
	analizar();
	return componentes;
}

fs.readFile('bd.txt','utf8', (err,dato) =>{
	if (err) { 
    console.error(err);
    return;
  }
	const expresion = dato;
	const resultado = revisarExpresion(expresion);
	console.log(resultado);
});