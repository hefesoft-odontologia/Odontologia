angular.module('odontologiaApp')
.controller('piezasDentalesCtrl', ['$scope', 'odontogramaJsonServices', 
	function ($scope, odontogramaJsonServices) {

	$scope.listado = [];

	function inicializar(){
	 odontogramaJsonServices.obtenerOdontogramaBase().then(success);
	}

	function success(data){
		$scope.listado = data;
	}

	inicializar();

}])