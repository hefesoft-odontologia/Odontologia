angular.module('Historia')
.controller('realizarOdontogramaCtrl', ['$scope', 'dataTableStorageFactory', 
	function ($scope, dataTableStorageFactory) {

	$scope.Diagnosticos = [];

	function inicializarDatos(){
		dataTableStorageFactory.getTableByPartition('TmDiagnosticos', 'UsuarioPruebas')
      .success(function(data){          
          $scope.Diagnosticos = data;
        }).error(function(error){
          console.log(error);          
        })
	}

	$scope.clickMenu = function(i, item){
    
 	}

	inicializarDatos();
	
}])