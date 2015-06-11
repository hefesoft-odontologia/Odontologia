angular.module('odontologiaApp')
.controller('piezasDentalesCtrl', ['$scope', 'odontogramaJsonServices', '$modal', 'diagnosticoServices',
	function ($scope, odontogramaJsonServices, $modal, diagnosticoServices) {

	$scope.listado = [];	
	$scope.tratamientoPiezaDental = [];
	$scope.piezaSeleccionada = {};

	var piezaBaseSupernumerario = {};
	var index = {};

	var Hefesoft  = window.Hefesot;


	//Hasta aca se propaga el evento
    $scope.$watch('numeroPiezaModificada', function(e) {      
      if(e){
      	modificado(e);      	
      } 
    });

	$scope.dynamicPopover = {
	    content: 'Acciones sobre la pieza dental',
	    templateUrl: 'opcionesPiezaDental.html',
	    title: 'Pieza dental'
	};

	$scope.seleccionar = function(item, $index){
		index = $index;
		$scope.piezaSeleccionada = item;

		if(angular.isDefined($scope.fnClick) && angular.isFunction($scope.fnClick)){
			$scope.fnClick($scope.$parent, { 'item' : item });
		}
	}

	/* Elementos seleccionado del menu lateral */
	$scope.clickPiezaDental = function(){
		var piezaSeleccionada = $scope.piezaSeleccionada;
		var diagnosticoSeleccionado = $scope.$parent.diagnosticoSeleccionado;
		var tratamientoSeleccionado = $scope.$parent.tratamientoSeleccionado;
				
		hidePopOver();
		mostrarModalSeleccionado(piezaSeleccionada,diagnosticoSeleccionado, tratamientoSeleccionado);
	}

	$scope.supernumerario = function(posicion){
		var numero = $scope.piezaSeleccionada.numeroPiezaDental + "+";
		agregarSupernumerario(index, numero, posicion);		
	}

	$scope.ausente = function(){
		$scope.piezaSeleccionada.numeroPiezaDental = eliminarTextosNumeros($scope.piezaSeleccionada.numeroPiezaDental);
		$scope.piezaSeleccionada.numeroPiezaDental = "tachados-" + $scope.piezaSeleccionada.numeroPiezaDental;
	}

	$scope.implante = function(){
		$scope.piezaSeleccionada.numeroPiezaDental = eliminarTextosNumeros($scope.piezaSeleccionada.numeroPiezaDental);
		$scope.piezaSeleccionada.numeroPiezaDental = "tornillo-" + $scope.piezaSeleccionada.numeroPiezaDental;	
	}

	function agregarSupernumerario(index, numero, posicision){
		
		var elementoInsertar = angular.copy(piezaBaseSupernumerario);
		elementoInsertar.numeroPiezaDental = numero;

		if(posicision == "right"){
			index = index +1;
			$scope.listado.splice(index, 0, elementoInsertar);
		}
		else if(posicision == "left"){			
			$scope.listado.splice(index, 0, elementoInsertar);
		}
	}

	//elimina los textos tachado y tornillo del numero
	function eliminarTextosNumeros(item){
		item = String(item);
		item = item.replace("tachados-", "");
		item = item.replace("tornillo-", "");
		return item; 
	}

	function inicializar(){
	 odontogramaJsonServices.obtenerOdontogramaBase().then(success);
	}

	function success(data){
		//Se usa una pieza dental como base para cuando se neceite agregar
		//Un diente supernumerario
		piezaBaseSupernumerario = data[0];
		$scope.listado = data;
	}

	function modificado(item){
		var pieza = _.find($scope.listado, { 'numeroPiezaDental': item.numeroPiezaDental});
		var index = _.findIndex($scope.listado, { 'numeroPiezaDental': item.numeroPiezaDental});

		//Cuando se guarda en azure los enteros se vuelven string por eso se hace esta validacion
		if(angular.isUndefined(pieza)){
			var numeroPiezaDental = String(item.numeroPiezaDental);
			pieza = _.find($scope.listado, { 'numeroPiezaDental': numeroPiezaDental});
			index = _.findIndex($scope.listado, { 'numeroPiezaDental': numeroPiezaDental});
		}

		if(index >=0){
			var nombreDiagnostico = item.superficie + 'Diagnosticos_arrayHefesoft';
			Hefesoft.eliminar(item, $scope.listado[index][nombreDiagnostico]);
			diagnosticoServices.extraerUltimoDiagnosticoPorSuperficie($scope.listado[index]);
		}
	}

	/**************** Mostrar pieza dental seleccionada *****************/
	function mostrarModalSeleccionado(item, diagnostico, tratamiento){
		var modalInstance = $modal.open({
	        animation: true,
	        templateUrl: 'app/scripts/controllers/odontograma/directivas/piezaDental/template/seleccionada.html',
	        controller: 'piezaDentalSeleccionadaCtrl',
	        size: 'sm',
	        resolve: {
	          diagnostico : function () {
	            return diagnostico;
	          },
	          tratamiento : function () {
	            return tratamiento;
	          },
	          piezaDental : function () {
	            return item;
	          }
	        }
	      });

		//El primero es cerrar el segundo es dimiss
		 modalInstance.result.then(
		 	function(data){},
		 	function (data) {
       	 		$scope.fnModificado($scope.$parent, { 'item' : item });
	     });
	}

	//Oculta todos los pop over abiertos
	function hidePopOver(){
		$('.popover').hide();
	}

	inicializar();

}])