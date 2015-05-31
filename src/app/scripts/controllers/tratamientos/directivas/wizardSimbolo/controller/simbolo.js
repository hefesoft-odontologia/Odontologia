  angular.module('odontologiaApp')
  .controller('SimboloCtrl', ['$scope', 'dataTableStorageFactory', 'wizardPasoVariablesServices', '$rootScope',
    function ($scope, dataTableStorageFactory, wizardPasoVariablesServices, $rootScope) {

    	$scope.wizard = {mostrarColor: false, mostrarSimbolo: false, mostrarImagen: false};
        $scope.cerrar;        

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

        $scope.finishedWizard = function(){
            wizardPasoVariablesServices.setDiagnosticoSimbolo($scope.wizard);
            $scope.cerrar = true;
            
            //Version alternativa para cerrar la ventana
            //$rootScope.$broadcast('Cerrar-ventana');           
        }    

}])