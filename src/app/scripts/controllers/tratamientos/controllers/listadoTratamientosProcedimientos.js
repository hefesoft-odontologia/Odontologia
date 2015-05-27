  angular.module('odontologiaApp')
  .controller('listadoTratamientosProcedimientos', ['$scope', '$modal', 'dataTableStorageFactory', 'messageService', '$modalInstance',
    function ($scope, $modal, dataTableStorageFactory, messageService, $modalInstance) {

       $scope.tratamientos = [];
       var tratamientoSeleccionado = {};

       $scope.selected = function(item){
       	 tratamientoSeleccionado = item;
       	 inicializarElementosProcedimientos();
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


	  /*************************** Procedimientos *********************/
	  $scope.openProcedimientos = function (size, seleccionado) {
	     var modalInstance = $modal.open({
	        animation: true,
	        templateUrl: 'app/scripts/controllers/procedimientos/views/addProcedimiento.html',
	        controller: 'AddProcedimientoCtrl',
	        size: size,
	        resolve: {
	          tratamientoSeleccionado : function () {
	            return tratamientoSeleccionado;
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

	  function inicializarElementosProcedimientos(){
	  	//El ultimo parametro es el tratamiento seleccionado
	  	dataTableStorageFactory.getTableByPartition('TmProcedimiento', 'UsuarioPruebas' + tratamientoSeleccionado.RowKey)
      	.success(function(data){
      	  var list = procesarProcedimientos(data);
          $scope.procedimientos = list;        
        }).error(function(error){
          console.log(error);          
        })
	  }


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

      function procesarProcedimientos(data){
      	for (var i = data.length - 1; i >= 0; i--) {
      		data[i]['especialidad'] = JSON.parse(data[i]['especialidad']);
      	};

      	return data;
      }

	  inicializarElementos();

  }])