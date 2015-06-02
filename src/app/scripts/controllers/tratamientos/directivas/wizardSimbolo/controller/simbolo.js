  angular.module('odontologiaApp')
  .controller('SimboloCtrl', ['$scope', 'dataTableStorageFactory', 'wizardPasoVariablesServices', '$rootScope',
    function ($scope, dataTableStorageFactory, wizardPasoVariablesServices, $rootScope) {

    	$scope.wizard = {mostrarColor: false, mostrarSimbolo: false, mostrarImagen: false};
        $scope.wizard.color = '#4a6ac3';
        $scope.Fuentes = [{fuente: 'Arial', codigo : 1 },{fuente: 'Glyphyx', codigo : 2}, {fuente: 'signify', codigo : 3}, {fuente: 'raphael', codigo : 4}, {fuente:'odontologia', codigo : 5}];
        $scope.wizard.objectHefesoftFuente = $scope.Fuentes[1];
        $scope.cerrar;

        var tipoSeleccionado = {};

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

            tipoSeleccionado = tipo;
    	}

        $scope.finishedWizard = function(){            
            
            if(tipoSeleccionado === 'Color'){
                delete $scope.wizard['simbolo'];
                delete $scope.wizard['imagen'];
                $scope.wizard.objectHefesoftFuente = undefined;
            }
            else if(tipoSeleccionado === 'Simbolo'){
                delete $scope.wizard['color'];
                delete $scope.wizard['imagen'];
            }
            else if(tipoSeleccionado === 'Imagen'){
                delete $scope.wizard['color'];
                delete $scope.wizard['simbolo'];
            }

            eliminarPropiedadesMostrar();
            wizardPasoVariablesServices.setDiagnosticoSimbolo($scope.wizard);
            $scope.cerrar = true;
            
            //Version alternativa para cerrar la ventana
            //$rootScope.$broadcast('Cerrar-ventana');           
        }

        function eliminarPropiedadesMostrar(){
            delete $scope.wizard['mostrarColor'];
            delete $scope.wizard['mostrarSimbolo'];
            delete $scope.wizard['mostrarImagen'];
        }    

}])