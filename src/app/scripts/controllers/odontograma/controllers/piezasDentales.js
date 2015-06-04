angular.module('odontologiaApp')
.controller('piezasDentalesCtrl', ['$scope', 'odontogramaJsonServices', 
	function ($scope, odontogramaJsonServices) {

	$scope.listado = [];

	function inicializar(){
	 odontogramaJsonServices.obtenerOdontogramaBase().then(success);
	}

	function success(data){
		$scope.listado = data;

		for (var i = $scope.listado.length - 1; i >= 0; i--) {
			$scope.listado[i].centro_objectHefesoft =  {color: 'red'};
			$scope.listado[i].izquierda_objectHefesoft =  {color: 'red'};
		};
	}

	inicializar();

}])