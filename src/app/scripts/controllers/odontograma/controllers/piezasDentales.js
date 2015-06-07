angular.module('odontologiaApp')
.controller('piezasDentalesCtrl', ['$scope', 'odontogramaJsonServices', '$modal', 
	function ($scope, odontogramaJsonServices, $modal) {

	$scope.listado = [];	
	$scope.tratamientoPiezaDental = [];


	/* Elementos seleccionado del menu lateral */
	$scope.clickPiezaDental = function(item){
		var diagnosticoSeleccionado = $scope.$parent.diagnosticoSeleccionado;
		var tratamientoSeleccionado = $scope.$parent.tratamientoSeleccionado;
		
		var piezaSeleccionada = item;
		mostrarModalSeleccionado(piezaSeleccionada,diagnosticoSeleccionado, tratamientoSeleccionado);

		//validar si es mejor cambiar por broadcast
		$scope.$parent.$parent.fijarPiezaDental(item);
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
	}

	inicializar();

}])