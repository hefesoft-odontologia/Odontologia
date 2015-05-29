angular.module('odontologiaApp')
.controller('listadoProcedimientosCtrl', ['$scope', 'dataTableStorageFactory', '$modal',
	function ($scope, dataTableStorageFactory, $modal) {	

	/*************************** Procedimientos *********************/
	  $scope.openProcedimientos = function (size, seleccionado) {
	     var modalInstance = $modal.open({
	        animation: true,
	        templateUrl: 'app/scripts/controllers/procedimientos/views/addProcedimiento.html',
	        controller: 'AddProcedimientoCtrl',
	        size: size,
	        resolve: {
	          tratamientoSeleccionado : function () {
	            return $scope.tratamientoSeleccionado;
	          },
	          dxSeleccionado: function(){
	          	return $scope.dxSeleccionado;
	          },
	          seleccionado : function(){
	          	return seleccionado; 
	          }
	        }
	      });

	    modalInstance.result.then(function (selectedItem) {
	        $scope.selected = selectedItem;
	      }, 
	      function (data) {
	       	$scope.inicializarElementos($scope.tratamientoSeleccionado);
	      });
	  };


	   $scope.inicializarElementos = function(item){
	   	$scope.tratamientoSeleccionado = item;
	   	tratamientoSeleccionado = item;
	  	
	  	if(angular.isUndefined($scope.tratamientoSeleccionado.arrayProcedimientos)){
	  		$scope.tratamientoSeleccionado.arrayProcedimientos = [];
	  	}
	  }

	  $scope.eliminar = function(item, $index){
	  	$scope.tratamientoSeleccionado.arrayProcedimientos.splice($index, 1);
	  }
}])