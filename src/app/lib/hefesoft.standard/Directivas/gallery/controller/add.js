angular.module('directivas').
controller('addGalleryCtrl', ['$scope', '$modalInstance', function ($scope, $modalInstance) {
	
	$scope.partition = "pruebas";

	$scope.callback = function(data){
		$modalInstance.dismiss(data);
	}


}])