angular.module('odontologiaApp')
.controller('listadoProcedimientosCtrl', ['$scope', 'dataTableStorageFactory', '$modal',
	function ($scope, dataTableStorageFactory, $modal) {

	$scope.listado = [];

/*************************** Procedimientos *********************/
  $scope.openProcedimientos = function (size, seleccionado) {
     var modalInstance = $modal.open({
        animation: true,
        templateUrl: 'app/scripts/controllers/procedimientos/views/addProcedimiento.html',
        controller: 'AddProcedimientoCtrl',
        size: size,
        resolve: {
          seleccionado : function () {
            return seleccionado;
          },
          listado : function () {
            return $scope.listado;
          }
        }
      });

    modalInstance.result.then(function (data) {
    	//Avisa cuando se agrego un procedimiento
    	//al que contiene la directiva de procedimiento
    	if(angular.isDefined($scope.fnAdicionado) && angular.isFunction($scope.fnAdicionado)){
   	 		$scope.fnAdicionado($scope.$parent, { 'item' : data });
   		}
    });
  };


  $scope.inicializarElementos = function(elementos){	  
  	$scope.listado = Hefesot.aListado(elementos);
  }

  $scope.eliminar = function(item, $index){
  	$scope.listado.splice($index, 1);

  	if(angular.isDefined($scope.fnEliminar) && angular.isFunction($scope.fnEliminar)){
   	 	$scope.fnEliminar($scope.$parent, { 'item' : item, "index" : $index });
   	}
  }
}])