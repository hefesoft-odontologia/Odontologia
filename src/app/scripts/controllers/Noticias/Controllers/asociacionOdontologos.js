angular.module('odontologiaApp')
.controller('asociacionOdontologosCtrl', ['$scope', 'fbGroupsService',
	function ($scope, fbGroupsService) {

	$scope.data = {};
	
	function inicializar(){
		fbGroupsService.getWall().then(success);
	}

	function success(data){		
		$scope.data = _.where(data.data, { 'type': "photo" });	
	}

	inicializar();

}])