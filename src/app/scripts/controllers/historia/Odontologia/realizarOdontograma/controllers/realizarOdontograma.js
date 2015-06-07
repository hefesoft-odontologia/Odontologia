angular.module('Historia')
.controller('realizarOdontogramaCtrl', ['$scope', 'dataTableStorageFactory', 'tratamientoServices',
	function ($scope, dataTableStorageFactory, tratamientoServices) {

	$scope.Diagnosticos = [];
	$scope.diagnosticoSeleccionado = {};
	$scope.tratamientoSeleccionado = {};

	$scope.listadoTratamientosPorPiezaDental = [];
	$scope.listadoProcedimientosPorPiezaDental = [];

	function inicializarDatos(){
		dataTableStorageFactory.getTableByPartition('TmDiagnosticos', 'UsuarioPruebas')
      .success(function(data){          
          $scope.Diagnosticos = data;
        }).error(function(error){
          console.log(error);          
        })
	}

	//click sobre el drill down de diagnosticos
	$scope.clickMenu = function(i, item){
		fijarDiagnosticoSeleccionado(item);
		fijarTratamientoSeleccionado(item)
 	}

 	$scope.fijarPiezaDental = function(item){
 		var listadoTratamientos = tratamientoServices.extraerTratamientos(item);
 		$scope.listadoTratamientosPorPiezaDental = listadoTratamientos; 
 	}

 	$scope.eliminar = function(item, index){
 		console.log(item);
 	}

 	//Se dispara cuando un tratamiento se selecciona
 	$scope.tratamientoSeleccionada = function(e){
 		$scope.listadoProcedimientosPorPiezaDental = e;
 	}

 	function fijarDiagnosticoSeleccionado(item){
 		//Fijar el diagnostio seleccionado
		if(!angular.isUndefined(item.nombreTabla) && item.nombreTabla == "TmDiagnosticos"){
			$scope.diagnosticoSeleccionado = item;
		}
 	}

 	function fijarTratamientoSeleccionado(item){
 		//Fijar el procedimiento seleccionado
		if(angular.isUndefined(item.nombreTabla)){
			$scope.tratamientoSeleccionado = item;
		}
 	}

	inicializarDatos();
	
}])