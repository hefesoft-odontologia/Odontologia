  angular.module('odontologiaApp')
  .controller('listadoTratamientosCtrl', ['$scope', '$modal', 'dataTableStorageFactory', 'messageService', 
    function ($scope, $modal, dataTableStorageFactory, messageService) {


    	$scope.diagnosticoSeleccionado = {};
    	$scope.diagnosticoSeleccionado.arrayHefesoftTratamientos = [];

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

	  $scope.inicializarElementos = function(elementos){	  	
	  	$scope.diagnosticoSeleccionado.arrayHefesoftTratamientos = elementos;
	  }

	  function inicializarElementos(){
	  	$scope.diagnosticoSeleccionado.arrayHefesoftTratamientos = Hefesot.aListado($scope.diagnosticoSeleccionado.arrayHefesoftTratamientos);
	  	if(angular.isUndefined($scope.diagnosticoSeleccionado.arrayHefesoftTratamientos)){
	  		$scope.diagnosticoSeleccionado.arrayHefesoftTratamientos = [];
	  	}	  
	  }

	  $scope.eliminar = function(data, $index){	      
	      $scope.diagnosticoSeleccionado.arrayHefesoftTratamientos.splice($index, 1);	      	      
      }



	  inicializarElementos();

  }])