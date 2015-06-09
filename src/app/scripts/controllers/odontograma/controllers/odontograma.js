angular.module('odontologiaApp')
.controller('odontogramaCtrl', ['$scope', 
	function ($scope) {

	$scope.piezasDentales = { Permanente : true };
	$scope.permanente = false;

	$scope.modificado = function(item){		
		$scope.fnModificado($scope.$parent, { 'item' : item });
	}

}])