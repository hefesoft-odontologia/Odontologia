angular.module('odontologiaApp')
.directive('listadoProcedimientos', [function ($scope) {
	return {
		restrict: 'E',
		require: ['ngModel'],
		link: function (scope, iElement, attributes, ngModelCtrl) {
		   var cargarTratamiento = scope.inicializarElementosProcedimientos;
		   ngModelCtrl[0].$render = function(){
		  	if (!ngModelCtrl[0].$isEmpty(ngModelCtrl[0].$viewValue)) {
		  		var valor = ngModelCtrl[0].$viewValue;	
		  		cargarTratamiento(valor);
            }		  	
		  }
		},
		controller: 'listadoProcedimientosCtrl',
		templateUrl : 'app/scripts/controllers/procedimientos/views/listado.html'		
	};
}])