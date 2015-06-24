angular.module('odontologiaApp')
.controller('listadoProcedimientosCtrl', ['$scope', 'dataTableStorageFactory', '$modal',
	function ($scope, dataTableStorageFactory, $modal) {

	$scope.listado = [];  
  $scope.footer = {};

/*************************** Procedimientos *********************/
  $scope.openProcedimientos = function (size, seleccionado) {
     var modalInstance = $modal.open({
        animation: true,
        templateUrl: 'app/scripts/controllers/procedimientos/views/addProcedimiento.html',
        controller: 'AddProcedimientoCtrl',
        size: size,
        resolve: {
          seleccionado : function () {
            return seleccionado;
          },
          listado : function () {
            return $scope.listado;
          }
        }
      });

    modalInstance.result.then(function (data) {
    	//Avisa cuando se agrego un procedimiento
    	//al que contiene la directiva de procedimiento
    	if(angular.isDefined($scope.fnAdicionado) && angular.isFunction($scope.fnAdicionado)){
   	 		$scope.fnAdicionado($scope.$parent, { 'item' : data });
   		}
    });
  };


  $scope.inicializarElementos = function(elementos){	  
  	$scope.listado = Hefesot.aListado(elementos);
    inicializarSaldos($scope.listado);
    sumarValorFooter($scope.listado);
  }

  $scope.eliminar = function(item, $index){
  	$scope.listado.splice($index, 1);

  	if(angular.isDefined($scope.fnEliminar) && angular.isFunction($scope.fnEliminar)){
   	 	$scope.fnEliminar($scope.$parent, { 'item' : item, "index" : $index });
   	}
  }

  $scope.cambioValorPagado = function(item){
    item.saldo = item.valor - item.valorPagado;
    sumarValorFooter($scope.listado);
  }

  $scope.checkPagado = function(item){
    if(item.Pagado){
      item.saldo = 0;
      item.valorPagado = item.valor;      
    }
    else{
      item.saldo = item.valor;
      item.valorPagado = 0;      
    }

    sumarValorFooter($scope.listado);
  }

  function inicializarSaldos(array){
    if(array.length){
      for (var i = array.length - 1; i >= 0; i--) {
          
          if(angular.isUndefined(array[i]['saldo'])){
            array[i]['saldo'] = array[i]['valor']; 
          }

        };  
    }
  }

  function sumarValorFooter(array){
    $scope.footer.valor = _.sum(array, function(object) {
      return object.valor;
     });

    $scope.footer.saldo = _.sum(array, function(object) {
      return object.saldo;
     });
  }

}])