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
     agregarProcedimientos(data);
   }

    function agregarProcedimientos(item){
     if(angular.isUndefined(tratamientoSeleccionado.arrayProcedimientos)){
        tratamientoSeleccionado.arrayProcedimientos = [];
     }

     //Se agrega el procedimiento al treatamiento seleccionado
     tratamientoSeleccionado.arrayProcedimientos.push(item);
     sumar(tratamientoSeleccionado);
     $modalInstance.dismiss();     
   }

   function sumar(data){
      var valor = 0;
      for (var i = data.arrayProcedimientos.length - 1; i >= 0; i--) {
         valor = valor + data.arrayProcedimientos[i].valor;
      };

      data.valor = valor;
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