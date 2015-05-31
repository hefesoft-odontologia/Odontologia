  angular.module('odontologiaApp')
  .controller('wizardSimboloCtrl', ['$scope', 'dataTableStorageFactory', '$modal',
    function ($scope, dataTableStorageFactory,  $modal) {

    $scope.openWizard = function (size, seleccionado) {
	     var modalInstance = $modal.open({
	        animation: true,
	        templateUrl: 'app/scripts/controllers/tratamientos/directivas/wizardSimbolo/views/wizardSimbolo.html',
	        controller : 'modalCtrl',	        
	        size: size,
	        resolve: {
	          
	        }
	      });

	    modalInstance.result.then(function (selectedItem) {
	        
	    }, 
	    function (data) {
	       	
	    });
	    
	  };
}])