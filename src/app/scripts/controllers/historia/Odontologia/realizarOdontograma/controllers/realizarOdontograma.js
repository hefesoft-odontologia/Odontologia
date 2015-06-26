angular.module('Historia')
.controller('realizarOdontogramaCtrl', 
	['$scope', 'dataTableStorageFactory', 'tratamientoServices', 'odontogramaJsonServices', '$rootScope', '$state',
	function ($scope, dataTableStorageFactory, tratamientoServices, odontogramaJsonServices, $rootScope, $state) {
	var Hefesoft  = window.Hefesot;

	$scope.Diagnosticos = [];
	$scope.diagnosticoSeleccionado = {};
	$scope.tratamientoSeleccionado = {};
	

	$scope.PiezaSeleccionada;
	$scope.listadoTratamientosPorPiezaDental = [];
	$scope.listadoProcedimientosPorPiezaDental = [];
	$scope.listadoDiagnosticos = [];
	$scope.numeroPiezaModificada = {};
	$scope.contextoOdontograma = {};

	var idOdontograma = "usuario" + $rootScope.currentUser.id + "paciente" + $rootScope.currentPacient.RowKey;


	function inicializarDatos(){
	  //Carga de diagnosticos
	  dataTableStorageFactory.getTableByPartition('TmDiagnosticos', $rootScope.currentUser.id)
      .success(function(data){          
      	$scope.Diagnosticos = data;
   	  }).error(function(error){
      	console.log(error);          
      })

      //Carga de Odontograma
      dataTableStorageFactory.getTableByPartition('TmOdontograma', idOdontograma)
      .success(function(data){

      	if(angular.isDefined(data) && data.length > 0){
	      	//Ordenarlos deacuerdo al codigo como en la nube se guardan en string no los ordena bien
	        data = _.sortBy(data, function(item) {
	           return parseFloat(item.id);
	        });

	        tratamientoServices.extraerTodosTratamientos(data);
	      	
	      	var item = $scope.contextoOdontograma();
	 		var piezaDental = item.piezasDentalesScope();
	 		piezaDental.listado = data;
 		}

   	  }).error(function(error){
      	console.log(error);          
      })
	}

	$scope.planTratamiento = function(){
		$state.go("app.planTratamiento");
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
 	$scope.piezaDentalSeleccionada = function(item){
 		$scope.PiezaSeleccionada = item;
 		$scope.listadoDiagnosticos = tratamientoServices.extraerDiagnosticos(item);
 		var listadoTratamientos = tratamientoServices.extraerTratamientosDeDiagnosticos($scope.listadoDiagnosticos);
 		
 		$scope.listadoTratamientosPorPiezaDental = listadoTratamientos;

 		//Limpia el listado de los procedimientos
 		$scope.listadoProcedimientosPorPiezaDental = [];
 	}

 	$scope.eliminar = function(item, index){
 		$scope.numeroPiezaModificada = item;
 	}

 	//Se dispara cuando un tratamiento se selecciona
 	$scope.tratamientoSeleccionada = function(e){
 		$scope.listadoProcedimientosPorPiezaDental = e;
 	}

 	//Ocurre cuando se hace algo dentro del modal de la pieza dental
 	$scope.piezaModificada = function(item){
 		$scope.piezaDentalSeleccionada(item); 		
 	}

 	$scope.guardarCommand = function(){
 		var item = $scope.contextoOdontograma();
 		var piezaDental = item.piezasDentalesScope();

 		var listadoGuardar = piezaDental.listado;

 		//Datos, Nombre tabla, partition key, y campo que servira como row key
        dataTableStorageFactory.postTableArray(listadoGuardar, 'TmOdontograma',  idOdontograma, 'codigo')
        .success(function (data) {           
			piezaDental.listado = data;			           
        })
        .error(function (error) {           
            console.log(error);                    
        });
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

 	//Se obtiene el odontograma desde un objeto json que esta en la carpeta data
	function obtenerOdontogramaBase(){
		odontogramaJsonServices.obtenerOdontogramaBase().then(success);
	}

	inicializarDatos();
	
}])