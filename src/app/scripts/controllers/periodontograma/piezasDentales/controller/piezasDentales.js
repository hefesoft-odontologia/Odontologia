angular.module('odontologiaApp')
.controller('piezasDentalesPeriodontogramaCtrl', 
	['$scope', 'dataTableStorageFactory', 
	function ($scope, dataTableStorageFactory) {

	var i = 0;	
    $scope.zoom = 0.7;
    $scope.items = [];

	
	function obtenerPeriodontogramaBase(){
        dataTableStorageFactory.getJsonData('Periodontograma.json').success(function (data) {               
                $scope.items = data;                
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

    function obtenerPeriodontogramaBlob(){
        var usuario = users.getCurrentUser();
        dataTableStorageFactory.getTableByPartition('TmPeriodontograma', usuario.username+'paciente'+pacienteId)
        .success(success)
        .error(error);
    }

    function success(result){
        if(result.length > 0 ){
            datosGuardar = result;
            var data = result;
            for (var i = 0; i < data.length; i++) {
                data[i].click = clickPiezaDental;
            };

            $scope.items = data;
            $ionicLoading.hide();
        }
        else{
            obtenerPeriodontogramaBase();    
        }
    }

    function error(error){
        console.log(error);
        obtenerPeriodontogramaBase();
    }    

    obtenerPeriodontogramaBase();

}])