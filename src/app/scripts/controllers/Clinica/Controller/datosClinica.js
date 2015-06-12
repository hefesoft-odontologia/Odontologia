angular.module('odontologiaApp')
.controller('datosClinicaCtrl', ['$scope', 'dataTableStorageFactory', 
	function ($scope, dataTableStorageFactory) {
	
	$scope.clinica = {};

	$scope.guardar = function(){

		$scope.clinica['nombreTabla'] = 'TmDatosClinica';
		$scope.clinica['PartitionKey'] = "UsuarioPruebas";
		$scope.clinica['RowKey'] = "1";
		
		dataTableStorageFactory.saveStorage($scope.clinica);        
	}

	function inicializarElementos(){
	dataTableStorageFactory.getTableByPartitionAndRowKey('TmDatosClinica', 'UsuarioPruebas', "1")
      .success(function(data){          
      	$scope.clinica = data;
   	  }).error(function(error){
      	console.log(error);          
      })
	}

	inicializarElementos();

}])