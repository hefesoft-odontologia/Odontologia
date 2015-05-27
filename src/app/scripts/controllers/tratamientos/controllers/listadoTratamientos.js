  angular.module('odontologiaApp')
  .controller('listadoTratamientosCtrl', ['$scope', '$modal', 'dataTableStorageFactory', 'messageService', 
    function ($scope, $modal, dataTableStorageFactory, messageService) {

       $scope.tratamientos = [];  
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
	          tratamientoSeleccionado : function () {
	            return seleccionado;
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
	  	dataTableStorageFactory.getTableByPartition('TmTratamientos', 'UsuarioPruebas')
      	.success(function(data){          
          $scope.tratamientos = data;        
        }).error(function(error){
          console.log(error);          
        })
	  }

	  $scope.eliminar = function(data, $index){
	      data.Estado_Entidad = "2";    
	      dataTableStorageFactory.saveStorage(data);
	      $scope.tratamientos.splice($index, 1);
      }

     

	  inicializarElementos();

  }])