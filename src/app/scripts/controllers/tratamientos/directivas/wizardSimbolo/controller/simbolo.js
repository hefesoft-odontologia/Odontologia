  angular.module('odontologiaApp')
  .controller('SimboloCtrl', ['$scope', 'dataTableStorageFactory',
    function ($scope, dataTableStorageFactory) {

    	$scope.wizard = {mostrarColor: false, mostrarSimbolo: false, mostrarImagen: false};


    	$scope.mostrarSimbolo = function(tipo){

    		if(tipo === 'Color'){
    			$scope.wizard.mostrarColor = true;
    			$scope.wizard.mostrarSimbolo = false;
    			$scope.wizard.mostrarImagen = false;
    		}
    		else if(tipo === 'Simbolo'){
    			$scope.wizard.mostrarColor = false;
    			$scope.wizard.mostrarSimbolo = true;
    			$scope.wizard.mostrarImagen = false;
    		}
    		else if(tipo === 'Imagen'){
    			$scope.wizard.mostrarColor = false;
    			$scope.wizard.mostrarSimbolo = false;
    			$scope.wizard.mostrarImagen = true;
    		}
    	}    

}])