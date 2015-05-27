angular.module('odontologiaApp')
.controller('listadoProcedimientosCtrl', ['$scope', 'dataTableStorageFactory', '$modal',
	function ($scope, dataTableStorageFactory, $modal) {

	var tratamientoSeleccionado = {};

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
	          seleccionado : function(){
	          	return seleccionado; 
	          }
	        }
	      });

	    modalInstance.result.then(function (selectedItem) {
	        $scope.selected = selectedItem;
	      }, 
	      function (data) {
	       	inicializarElementosProcedimientos();
	      });
	  };


	   $scope.inicializarElementosProcedimientos = function(item){
	   	tratamientoSeleccionado = item;
	  	//El ultimo parametro es el tratamiento seleccionado
	  	dataTableStorageFactory.getTableByPartition('TmProcedimiento', 'UsuarioPruebas' + tratamientoSeleccionado.RowKey)
      	.success(function(data){
      	  var list = procesarProcedimientos(data);
          $scope.procedimientos = list;        
        }).error(function(error){
          console.log(error);          
        })
	  }

	   function procesarProcedimientos(data){
      	for (var i = data.length - 1; i >= 0; i--) {
      		data[i]['especialidad'] = JSON.parse(data[i]['especialidad']);
      	};

      	return data;
      }
	
}])