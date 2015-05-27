  angular.module('odontologiaApp')
  .controller('AddProcedimientoCtrl', ['$scope', 'CieCupsServices', '$modal', 'dataTableStorageFactory', 'messageService', 'tratamientoSeleccionado', 'seleccionado', '$modalInstance',
    function ($scope, CieCupsServices, $modal, dataTableStorageFactory, messageService, tratamientoSeleccionado, seleccionado, $modalInstance) {

    var esNuevo = true;
    $scope.Procedimiento = {};
    $scope.listadoCup = [];

    if(!angular.isUndefined(seleccionado)){
       $scope.Procedimiento = seleccionado;
       esNuevo = false;
    }

    $scope.Especialidades = [{nombre: 'ODONTOLOGIA', codigo : 1}, {nombre: 'ODONTOPEDIATRIA', codigo : 2}, {nombre: 'ORTOPEDIA, ORTODONCIA Y OTROS PROCEDIMIENTOS', codigo : 3}];
  

   $scope.adicionar = function(){
   	 var data = $scope.Procedimiento;
     data.especialidad =  JSON.stringify(data.especialidad);

      //data.PartitionKey = usuario.username;
      data.PartitionKey = "UsuarioPruebas" + tratamientoSeleccionado.RowKey;
      
      //Cuando es un nuevo paciente el otro caso es cuando se edita un registro
      if(angular.isUndefined(data.RowKey)){
        data.generarIdentificador = true;
      }

      data.nombreTabla= 'TmProcedimiento';       

      dataTableStorageFactory.saveStorage(data).then(function(data){        
        messageService.showMessage("Procedimiento guardado");
        if(esNuevo){
          $modalInstance.dismiss(data);
        }
        else{
          $modalInstance.close(); 
        }
      });
   }

    function inicializar(){
     CieCupsServices.listadoCup().then(success, error);
   }

   function success(data){
      $scope.listadoCup = data;
   }

   function error(err){
      console.log(err);
   }


   inicializar();

  }])