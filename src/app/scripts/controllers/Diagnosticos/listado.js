  angular.module('odontologiaApp')
  .controller('DxListadoCtrl', ['$scope', 'CieCupsServices', '$modal', 'dataTableStorageFactory',
    function ($scope, CieCupsServices, $modal, dataTableStorageFactory) {

    $scope.Listado = [];
   
  	function inicializar(){
      dataTableStorageFactory.getTableByPartition('TmDiagnosticos', 'UsuarioPruebas')
      .success(function(data){
          var data = procesarListado(data);
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

    function procesarListado(data){
      for (var i = 0; i < data.length; i++) {
            if(!angular.isUndefined(data[i]["Tipo"]) && data[i]["Tipo"] != null){
              data[i]["Tipo"] = JSON.parse(data[i]["Tipo"]); 
            }
        };

        return data;
    }
  
    /***************** Modal /***********************/

   $scope.open = function (size, seleccionado) {

   var modalInstance = $modal.open({
      animation: true,
      templateUrl: 'app/scripts/controllers/Diagnosticos/views/addDiagnostico.html',
      controller: 'AddDxCtrl',
      size: size,
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
        procesarListado($scope.Listado);
      }
    });
  };

  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };
 /*****************************************************/

  	inicializar();

  }])