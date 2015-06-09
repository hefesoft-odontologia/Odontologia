angular.module('odontologiaApp')
.controller('piezaDentalSeleccionadaCtrl', ['$scope', '$modalInstance', 'diagnostico', 'tratamiento', 'piezaDental',
	function ($scope, $modalInstance, diagnostico, tratamiento, piezaDental) {

	$scope.piezaDental = piezaDental;	

	 /* 
	 	Se le agregan a la superficie seleccionada los procedimientos y tratamientos
	    que se encuentran dentro del bjeto diagnostico 
	 */

	 $scope.clickSuperficie = function(superficie){
 	 	var diagnosticoAdicionar = angular.copy(diagnostico);	 	

 	 	if(validarYaExisteDiagnostico(superficie,diagnosticoAdicionar)){

			agregarElementoDiagnosticoASuperficie(superficie, diagnosticoAdicionar);
			$scope.piezaDental = extraerDesdeDiagnostico($scope.piezaDental);		    
		}
	 }

	 /*
		Se agrega el elemento diagnostico a la superficies para cuando se persista
		quede guarado el diagnostico que se realizo
	 */
	 function agregarElementoDiagnosticoASuperficie(superficie, diagnosticoAdicionar){
	 	var arrayNombre = superficie + "Diagnosticos_arrayHefesoft";

	 	if(angular.isUndefined($scope.piezaDental[arrayNombre])){
	 		$scope.piezaDental[arrayNombre] = [];
	 	}

	 	$scope.piezaDental[arrayNombre].push(diagnosticoAdicionar);
	 }

	 /*
		Valida si ya existe el diagnostico
	 */
	 function validarYaExisteDiagnostico(superficie, diagnosticoAdicionar){
	 	var arrayNombre = superficie + "Diagnosticos_arrayHefesoft";

	 	if(angular.isUndefined($scope.piezaDental[arrayNombre])){
	 		return true;
	 	}
	 	
	 	var result = _.findIndex($scope.piezaDental[arrayNombre], { 'RowKey': diagnosticoAdicionar.RowKey });

	 	if(result >= 0){
	 		return false;
	 	}
	 	else{
	 		return true;
	 	}
	 }

    function extraerDesdeDiagnostico(item){

    var elementoDevolver = item;
    var partes = ['centro','izquierda','derecha','abajo','arriba','inferior','superior'];

    for (var i = partes.length - 1; i >= 0; i--) {
        var arrayNombre = partes[i] + "Diagnosticos_arrayHefesoft";

        if(angular.isDefined(item[arrayNombre])){

            //Eje item.centro_objectHefesoft.color
            var nombreObjetoCrear = partes[i] + "_objectHefesoft";
            var itemsEnSupericie = item[arrayNombre];
            //saca el ultimo diagnostico para esta superficie
            var diagnostico = itemsEnSupericie[0];

            if(angular.isUndefined(elementoDevolver[nombreObjetoCrear])){
            	elementoDevolver[nombreObjetoCrear] = {};
        	}

            elementoDevolver[nombreObjetoCrear].color = diagnostico.objectHefesoftDiagnostico.color;
            elementoDevolver[nombreObjetoCrear].simbolo = diagnostico.objectHefesoftDiagnostico.simbolo;
            elementoDevolver[nombreObjetoCrear].fuente = diagnostico.objectHefesoftDiagnostico.fuente;
            elementoDevolver[nombreObjetoCrear].pathImagen = diagnostico.objectHefesoftDiagnostico.pathImagen;
        }      
    };

    return elementoDevolver;
   }
	
}])