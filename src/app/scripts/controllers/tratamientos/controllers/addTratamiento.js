  angular.module('odontologiaApp')
  .controller('AddTratamientoCtrl', ['$scope', 'CieCupsServices', '$modal', 'dataTableStorageFactory', 'messageService',  '$modalInstance',
    function ($scope, CieCupsServices, $modal, dataTableStorageFactory, messageService,  $modalInstance) {

    var esNuevo = true;
    $scope.Tratamiento = {};

   $scope.adicionar = function(){
   	 var data = $scope.Tratamiento;
      //data.PartitionKey = usuario.username;
      data.PartitionKey = "UsuarioPruebas";

      //Cuando es un nuevo paciente el otro caso es cuando se edita un registro
      if(angular.isUndefined(data.RowKey)){
        data.generarIdentificador = true;
      }

      data.nombreTabla= 'TmTratamientos';       

      dataTableStorageFactory.saveStorage(data).then(function(data){        
        messageService.showMessage("Tratamiento guardado");
        if(esNuevo){
          $modalInstance.dismiss(data);
        }
        else{
          $modalInstance.close(); 
        }
      });
   }

  }])