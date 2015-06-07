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

	return dataFactory;

}])