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
   
  
    /***************** Modal /***********************/

    /****************** Editar ******************/
   $scope.open = function (seleccionado) {
     var modalInstance = $modal.open({
        animation: true,
        templateUrl: 'app/scripts/controllers/Diagnosticos/views/addDiagnostico.html',
        controller: 'AddDxCtrl',
        size: 'lg',
        resolve: {
          dxSeleccionado : function () {
            return seleccionado;
          }
        }
      });

    modalInstance.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
      }, 
      function (data) {
        console.log('Modal dismissed at: ' + new Date());

        if(data !==  "backdrop click" && !angular.isUndefined(data)){
          $scope.Listado.push(data);          
        }
      });
  };

  /****************** Tratamientos pop up ******************/
  $scope.openTratamiento = function (seleccionado) {
      $scope.diagnosticoSeleccionado = seleccionado;
      modalInstance = $modal.open({
      animation: true,
      templateUrl: 'app/scripts/controllers/tratamientos/views/listadoTratamientosProcedimientos.html',
      controller : 'listadoProcedimientosTratamientosCtrl',
      size: 'lg',
      backdrop : 'static',
      resolve: {
        dxSeleccionado : function () {
          return $scope.diagnosticoSeleccionado;
        }
      }
  });

    modalInstance.result.then(closed);   
  };

  function closed(data){    
    dataTableStorageFactory.saveStorage($scope.diagnosticoSeleccionado);
  }

  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };
 /*****************************************************/

  
  inicializar();

}])