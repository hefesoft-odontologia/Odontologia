angular.module('odontologiaApp')
.directive('listadosDiagnosticos', ['$parse', function ($parse) {

	var directiva = {};
	
	directiva.restrict = "E";
	directiva.templateUrl = "app/scripts/controllers/Diagnosticos/directivas/template/Diagnosticos.html";
	
	directiva.scope = {
		modoLectura : "=",
		source : "="
	};

	directiva.controller = "listadosDiagnosticosCtrl";

	directiva.link = function (scope, iElement, attrs) {

	   var existClick = attrs['tratamientosCallback'];
       if(angular.isDefined(existClick)){
          scope.fnTratamientos = $parse(attrs['tratamientosCallback']);
       }

       existClick = attrs['editCallback'];
       if(angular.isDefined(existClick)){
          scope.fnEdit = $parse(attrs['editCallback']);
       }

       existClick = attrs['eliminarCallback'];
       if(angular.isDefined(existClick)){
          scope.fnEliminar = $parse(attrs['eliminarCallback']);
       }

       existClick = attrs['newCallback'];
       if(angular.isDefined(existClick)){
          scope.fnNew = $parse(attrs['newCallback']);
       }
			
	}

	return directiva;	
}])

.controller('listadosDiagnosticosCtrl', ['$scope', function ($scope) {
	
	$scope.openTratamiento = function(item){
		if(angular.isDefined($scope.fnTratamientos) && angular.isFunction($scope.fnTratamientos)){
			$scope.fnTratamientos($scope.$parent, { 'item' : item });
		}
	}

	$scope.open = function(item){
		if(angular.isDefined($scope.fnEdit) && angular.isFunction($scope.fnEdit)){
			$scope.fnEdit($scope.$parent, { 'item' : item });
		}
	}

	$scope.new = function(){
		if(angular.isDefined($scope.fnNew) && angular.isFunction($scope.fnNew)){
			$scope.fnEdit($scope.$parent);
		}
	}

	$scope.eliminar = function(item, $index){
		if(angular.isDefined($scope.fnEliminar) && angular.isFunction($scope.fnEliminar)){
			$scope.fnEliminar($scope.$parent, { 'item' : item, '$index' : $index });
		}
	}

}])