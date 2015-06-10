angular.module('odontologiaApp')
.controller('piezaDentalSeleccionadaCtrl', ['$scope', '$modalInstance', 'diagnostico', 'tratamiento', 'piezaDental', 'diagnosticoServices',
	function ($scope, $modalInstance, diagnostico, tratamiento, piezaDental, diagnosticoServices) {

	$scope.piezaDental = piezaDental;

	 /* 
	 	Se le agregan a la superficie seleccionada los procedimientos y tratamientos
	    que se encuentran dentro del bjeto diagnostico 
	 */

	 $scope.clickSuperficie = function(superficie){
 	 	var diagnosticoAdicionar = angular.copy(diagnostico);
 	 	diagnosticoAdicionar.superficie = superficie;
 	 	diagnosticoAdicionar.numeroPiezaDental = piezaDental.numeroPiezaDental; 
 	 	diagnosticoAdicionar.codigo = piezaDental.codigo; 

 	 	if(diagnosticoServices.validarYaExisteDiagnostico(superficie,diagnosticoAdicionar, piezaDental)){

			agregarElementoDiagnosticoASuperficie(superficie, diagnosticoAdicionar);
			$scope.piezaDental = diagnosticoServices.extraerDesdeDiagnostico($scope.piezaDental);		    
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

	

   
	
}])