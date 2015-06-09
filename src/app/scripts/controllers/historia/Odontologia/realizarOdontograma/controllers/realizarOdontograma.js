angular.module('Historia')
.controller('realizarOdontogramaCtrl', ['$scope', 'dataTableStorageFactory', 'tratamientoServices',
	function ($scope, dataTableStorageFactory, tratamientoServices) {
	var Hefesoft  = window.Hefesot;

	$scope.Diagnosticos = [];
	$scope.diagnosticoSeleccionado = {};
	$scope.tratamientoSeleccionado = {};

	$scope.PiezaSeleccionada;
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

	$scope.procedimientoEliminado = function(item){
		console.log(item);
	}

	$scope.tratamientoEliminado = function(item){
		var nombrePropiedad = item.superficie + '_arrayHefesoft';		
		Hefesoft.eliminar(item, $scope.listadoTratamientosPorPiezaDental);
		Hefesoft.eliminar(item, $scope.PiezaSeleccionada[nombrePropiedad]);
		console.log(item);
	}

	//click sobre el drill down de diagnosticos
	$scope.clickMenu = function(i, item){
		fijarDiagnosticoSeleccionado(item);
		fijarTratamientoSeleccionado(item)
 	}

 	//Ocurre cuando se hace click sobre  una pieza dental
 	$scope.fijarPiezaDental = function(item){
 		$scope.PiezaSeleccionada = item;
 		var listadoDiagnosticos = tratamientoServices.extraerDiagnosticos(item);
 		var listadoTratamientos = tratamientoServices.extraerTratamientosDeDiagnosticos(listadoDiagnosticos);
 		
 		$scope.listadoTratamientosPorPiezaDental = listadoTratamientos;

 		//Limpia el listado de los procedimientos
 		$scope.listadoProcedimientosPorPiezaDental = [];
 	}

 	$scope.eliminar = function(item, index){
 		console.log(item);
 	}

 	//Se dispara cuando un tratamiento se selecciona
 	$scope.tratamientoSeleccionada = function(e){
 		$scope.listadoProcedimientosPorPiezaDental = e;
 	}

 	//Ocurre cuando se hace algo dentro del modal de la pieza dental
 	$scope.piezaModificada = function(item){
 		$scope.fijarPiezaDental(item); 		
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