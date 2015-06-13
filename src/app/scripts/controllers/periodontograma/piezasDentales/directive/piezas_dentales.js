angular.module('odontologiaApp')
.directive('piezasDentalesPeriodontograma', 
	['$parse', function ($parse) {
	
	var directive = {};
	directive.restrict = "E";
	directive.link = function(scope, iElement, attrs){

	   var existClick = attrs['clickPiezaDental'];
       if(angular.isDefined(existClick)){
          scope.fnPiezaDental = $parse(attrs['clickPiezaDental']);
       }

       if(scope.contexto){
      	scope.contexto = function(){
      	  return scope;
      	}
       }
	};

	directive.templateUrl = "app/scripts/controllers/periodontograma/piezasDentales/views/periodontograma.html";
	directive.controller = "piezasDentalesPeriodontogramaCtrl";

	directive.scope = {
		contexto : "="
	};

	return directive;	
}])