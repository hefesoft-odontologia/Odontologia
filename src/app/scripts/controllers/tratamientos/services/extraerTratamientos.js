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
				array = array.concat(itemsEnSupericie);
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
					array = array.concat(itemsEnSupericie);
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
				array = array.concat(listTratamientos);				
			}
		};

		return array; 

	}

	dataFactory.extraerTodosDiagnosticos = function(listado){

		var array = [];

		for (var i = listado.length - 1; i >= 0; i--) {
			var items = dataFactory.extraerDiagnosticos(listado[i]);
			array = array.concat(items);			
		};

		return array;
	}

	dataFactory.extraerTodosTratamientos = function(listado){

		var array = dataFactory.extraerTodosDiagnosticos(listado); 
	}

	return dataFactory;

}])