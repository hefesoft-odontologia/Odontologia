  angular.module('odontologiaApp')
  .controller('AddProcedimientoCtrl', ['$scope', 'CieCupsServices', '$modal', 'dataTableStorageFactory', 'messageService', 'tratamientoSeleccionado', 'seleccionado', '$modalInstance', 'dxSeleccionado',
    function ($scope, CieCupsServices, $modal, dataTableStorageFactory, messageService, tratamientoSeleccionado, seleccionado, $modalInstance, dxSeleccionado) {

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
     agregarProcedimientos(data);
   }

    function agregarProcedimientos(item){
     if(angular.isUndefined(tratamientoSeleccionado.procedimientos)){
        tratamientoSeleccionado.procedimientos = [];
     }

     //Se agrega el procedimiento al treatamiento seleccionado
     tratamientoSeleccionado.arrayProcedimientos.push(item);
     //Como son propiedades observables automaticamente se agregan al objeto diagnostico
     //que es el que finalmente se persiste
     dxSeleccionado.arrayTratamientos = JSON.stringify(dxSeleccionado.arrayTratamientos);
     dataTableStorageFactory.saveStorage(dxSeleccionado).then(successSave);
   }

   function successSave(){     
     $modalInstance.dismiss();
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