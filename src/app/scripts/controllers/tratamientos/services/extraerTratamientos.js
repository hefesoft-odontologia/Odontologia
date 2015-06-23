angular.module('odontologiaApp')
.service('tratamientoServices', [function () {
	
	var dataFactory = {};

	dataFactory.extraerTratamientos = function(item){
		var partes = ['centro','izquierda','derecha','abajo','arriba','inferior','superior'];
		var array = [];
		
		for (var i = partes.length - 1; i >= 0; i--) {
			var arrayNombre = partes[i] + "_arrayHefesoft";
			var itemsEnSupericie = item[arrayNombre];

			if(itemsEnSupericie.length > 0){
				concatPreservingReference(array, itemsEnSupericie);					
			}
		};

		return array;
	}

	dataFactory.extraerDiagnosticos = function(item){
		var partes = ['centro','izquierda','derecha','abajo','arriba','inferior','superior'];
		var array = [];
		
		for (var i = partes.length - 1; i >= 0; i--) {
			var arrayNombre = partes[i] + "Diagnosticos_arrayHefesoft";

			if(angular.isDefined(item[arrayNombre])){
				var itemsEnSupericie = item[arrayNombre];

				if(itemsEnSupericie.length > 0){					
					concatPreservingReference(array, itemsEnSupericie);	
				}
			}
		};

		return array;
	}

	dataFactory.extraerTratamientosDeDiagnosticos = function(data){
		
		var array = [];

		for (var i = data.length - 1; i >= 0; i--) {
			if(angular.isDefined(data[i].arrayHefesoftTratamientos)){
				var listTratamientos = data[i].arrayHefesoftTratamientos;
				concatPreservingReference(array, listTratamientos);				
			}
		};

		return array; 

	}

	dataFactory.extraerTodosDiagnosticos = function(listado){

		var array = [];

		for (var i = listado.length - 1; i >= 0; i--) {
			var items = dataFactory.extraerDiagnosticos(listado[i]);
			concatPreservingReference(array, items);
		};

		return array;
	}

	dataFactory.extraerTodosTratamientos = function(listado){

		var arrayDiagnosticos = dataFactory.extraerTodosDiagnosticos(listado);
		var arrayTratamientos = [];

		for (var i = arrayDiagnosticos.length - 1; i >= 0; i--) {
			concatPreservingReference(arrayTratamientos, arrayDiagnosticos[i].arrayHefesoftTratamientos);			
		};

		return arrayTratamientos;
	}

	dataFactory.extraerTodosProcedimientos = function(listado){

		var arrayTratamientos = dataFactory.extraerTodosTratamientos(listado);
		var arrayProcedimientos = [];

		for (var i = arrayTratamientos.length - 1; i >= 0; i--) {
			concatPreservingReference(arrayProcedimientos, arrayTratamientos[i].arrayHefesoftProcedimientos);
		};

		return arrayProcedimientos;
	}

	function concatPreservingReference(array, arrayAdicionar){
		
		for (var i = arrayAdicionar.length - 1; i >= 0; i--) {
			array.push(arrayAdicionar[i]);
		};
	}


	return dataFactory;

}])