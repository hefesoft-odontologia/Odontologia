angular.module('odontologiaApp')
.controller('piezasDentalesPeriodontogramaCtrl', 
	['$scope', 'dataTableStorageFactory', '$rootScope', 'piezasDentalesServices',
	function ($scope, dataTableStorageFactory, $rootScope, piezasDentalesServices) {

	var i = 0;	
    $scope.zoom = 0.7;
    $scope.items = [];

	
	function obtenerPeriodontogramaBase(){
        dataTableStorageFactory.getJsonData('Periodontograma.json').success(function (data) {               
            $scope.items = data;
            piezasDentalesServices.fijarPiezasDentales($scope.items);
        })
        .error(function (error) {
            console.log(error);
        });
    }

    $scope.clickPiezaDental = function(item){

        if(angular.isDefined($scope.fnPiezaDental) && angular.isFunction($scope.fnPiezaDental)){
            $scope.fnPiezaDental($scope.$parent, { 'item' : item });
         }
    }

    $scope.actualizarPiezas = function(elementosActualizar){

        for (var i = elementosActualizar.length - 1; i >= 0; i--) {
            var pieza = elementosActualizar[i];

            var index = _.findIndex($scope.items, function(chr) {
              return chr.codigo == pieza.codigo;
            });

           if(index >= 0){
                $scope.items[index] = pieza;
           }            
        };

    }

    obtenerPeriodontogramaBase();

}])