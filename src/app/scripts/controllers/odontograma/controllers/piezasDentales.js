angular.module('odontologiaApp')
.controller('piezasDentalesCtrl', ['$scope', 'odontogramaJsonServices', '$modal', 
	function ($scope, odontogramaJsonServices, $modal) {

	$scope.listado = [];	
	$scope.tratamientoPiezaDental = [];
	$scope.piezaSeleccionada = {};

	$scope.dynamicPopover = {
	    content: 'Acciones sobre la pieza dental',
	    templateUrl: 'myPopoverTemplate.html',
	    title: 'Pieza dental'
	};

	$scope.seleccionar = function(item){
		$scope.piezaSeleccionada = item;

		//validar si es mejor cambiar por broadcast
		$scope.$parent.$parent.fijarPiezaDental(item);
	}

	/* Elementos seleccionado del menu lateral */
	$scope.clickPiezaDental = function(){
		var piezaSeleccionada = $scope.piezaSeleccionada;
		var diagnosticoSeleccionado = $scope.$parent.diagnosticoSeleccionado;
		var tratamientoSeleccionado = $scope.$parent.tratamientoSeleccionado;
				
		hidePopOver();
		mostrarModalSeleccionado(piezaSeleccionada,diagnosticoSeleccionado, tratamientoSeleccionado);
	}

	function inicializar(){
	 odontogramaJsonServices.obtenerOdontogramaBase().then(success);
	}

	function success(data){
		$scope.listado = data;
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