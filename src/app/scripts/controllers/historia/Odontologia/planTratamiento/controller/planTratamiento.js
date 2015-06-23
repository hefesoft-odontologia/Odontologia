angular.module('Historia').
controller('planTratamientoCtrl', 
	['$scope', 'tratamientoServices', '$rootScope', 'dataTableStorageFactory', function ($scope, tratamientoServices, $rootScope, dataTableStorageFactory) {
	
	var idOdontograma = "usuario" + $rootScope.currentUser.id + "paciente" + $rootScope.currentPacient.RowKey;
	$scope.Listado = [];
	$scope.Source = []; 

	function inicializarDatos(){
      //Carga de Odontograma
      dataTableStorageFactory.getTableByPartition('TmOdontograma', idOdontograma)
      .success(function(data){

      	$scope.Source = data;

      	if(angular.isDefined(data) && data.length > 0){	
	        $scope.Listado = tratamientoServices.extraerTodosProcedimientos($scope.Source);
 		}

   	  }).error(function(error){
      	console.log(error);          
      })
	}

	//Como los elementos se estan pasando por referencia se puede guardar el mismo objeto que se cargo inicialmente
	$scope.guardarCommand = function(){
		//Datos, Nombre tabla, partition key, y campo que servira como row key
        dataTableStorageFactory.postTableArray($scope.Source, 'TmOdontograma',  idOdontograma, 'codigo')
        .success(function (data) {           
			piezaDental.listado = data;			           
        })
        .error(function (error) {           
            console.log(error);                    
        });
	}

	inicializarDatos();

}])