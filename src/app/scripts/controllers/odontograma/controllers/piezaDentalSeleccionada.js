angular.module('odontologiaApp')
.controller('piezaDentalSeleccionadaCtrl', ['$scope', '$modalInstance', 'diagnostico', 'tratamiento', 'piezaDental',
	function ($scope, $modalInstance, diagnostico, tratamiento, piezaDental) {

	$scope.piezaDental = piezaDental;

	 /* 
	 	Se le agregan a la superficie seleccionada los procedimientos y tratamientos
	    que se encuentran dentro del bjeto diagnostico 
	 */

	 $scope.clickSuperficie = function(superficie){
 	 	var diagnosticoPintar = diagnostico.objectHefesoftDiagnostico;
	 	var superficieNombre = superficie + "_objectHefesoft";
	 	var arrayNombre = superficie + "_arrayHefesoft";
		
		if(angular.isDefined(diagnosticoPintar))
	 	{
			$scope.piezaDental[superficieNombre] = diagnosticoPintar;

			/*se agregan los tratamientos a la superficie seleccionada*/
			if(angular.isDefined(tratamiento)){
				$scope.piezaDental[arrayNombre].push(tratamiento);
				agregarElementoDiagnosticoASuperficie(superficie);
			}
	    }
	 }

	 /*
		Se agrega el elemento diagnostico a la superficies para cuando se persista
		quede guarado el diagnostico que se realizo
	 */
	 function agregarElementoDiagnosticoASuperficie(superficie){
	 	var arrayNombre = superficie + "Diagnosticos_arrayHefesoft";

	 	if(angular.isUndefined($scope.piezaDental[arrayNombre])){
	 		$scope.piezaDental[arrayNombre] = [];
	 	}

	 	$scope.piezaDental[arrayNombre].push(diagnostico);
	 }
	
}])