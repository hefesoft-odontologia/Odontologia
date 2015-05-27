angular.module('odontologiaApp')
.controller('listadoProcedimientosTratamientosCtrl', ['$scope', 'dxSeleccionado', 
	function ($scope, dxSeleccionado) {
		$scope.diagnosticoSeleccionado = dxSeleccionado;
}])