  angular.module('odontologiaApp')
  .controller('listadoTratamientosCtrl', ['$scope', '$modal', 'dataTableStorageFactory', 'messageService', 
    function ($scope, $modal, dataTableStorageFactory, messageService) {


    	//Aca llega diagnosticoSeleccionado $scope.diagnosticoSeleccionado     
       $scope.selected = function(item){
       	 $scope.tratamientoSeleccionado = item;       	 
       }

       /**************** Tratamientos *****************************/
	   $scope.openTratamiento = function (size, seleccionado) {
	     var modalInstance = $modal.open({
	        animation: true,
	        templateUrl: 'app/scripts/controllers/tratamientos/views/addTratamiento.html',
	        controller: 'AddTratamientoCtrl',
	        size: size,
	        resolve: {
	          dxSeleccionado : function () {
	            return $scope.diagnosticoSeleccionado;
	          }
	        }
	      });

	    modalInstance.result.then(function (selectedItem) {
	        $scope.selected = selectedItem;
	      }, 
	      function (data) {	      	
	       	inicializarElementos();
	      });
	  };


	  function inicializarElementos(){
	  	$scope.diagnosticoSeleccionado.arrayTratamientos = Hefesot.aListado($scope.diagnosticoSeleccionado.arrayTratamientos);
	  	if(angular.isUndefined($scope.diagnosticoSeleccionado.arrayTratamientos)){
	  		$scope.diagnosticoSeleccionado.arrayTratamientos = [];
	  	}	  
	  }

	  $scope.eliminar = function(data, $index){	      
	      $scope.diagnosticoSeleccionado.arrayTratamientos.splice($index, 1);	      	      
      }    

	  inicializarElementos();

  }])