  angular.module('odontologiaApp')
  .controller('DxListadoCtrl', ['$scope', 'CieCupsServices', '$modal', 'dataTableStorageFactory',
    function ($scope, CieCupsServices, $modal, dataTableStorageFactory) {

    var modalInstance;
    $scope.Listado = [];
    $scope.diagnosticoSeleccionado = {};
   
  	function inicializar(){
      dataTableStorageFactory.getTableByPartition('TmDiagnosticos', 'UsuarioPruebas')
      .success(function(data){          
          $scope.Listado = data;
        }).error(function(error){
          console.log(error);          
        })
  	}

    $scope.eliminar = function(data, $index){
      data.Estado_Entidad = "2";    
      dataTableStorageFactory.saveStorage(data);
      $scope.Listado.splice($index, 1);
    }

    $scope.modificado = function(item){
      dataTableStorageFactory.saveStorage(item);
    }
   
    
  inicializar();

}])