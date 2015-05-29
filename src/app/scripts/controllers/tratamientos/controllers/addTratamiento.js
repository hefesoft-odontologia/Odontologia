  angular.module('odontologiaApp')
  .controller('AddTratamientoCtrl', ['$scope', 'CieCupsServices', '$modal', 'dataTableStorageFactory', 'messageService',  '$modalInstance', 'dxSeleccionado',
    function ($scope, CieCupsServices, $modal, dataTableStorageFactory, messageService,  $modalInstance, dxSeleccionado) {

    var esNuevo = true;
    $scope.Tratamiento = {};


   $scope.adicionar = function(){
   	 var data = $scope.Tratamiento;
      agregarTratamiento(data);
   }


   function agregarTratamiento(item){    
     dxSeleccionado.arrayTratamientos.push(item);     
     $modalInstance.dismiss(); 
   }

}])