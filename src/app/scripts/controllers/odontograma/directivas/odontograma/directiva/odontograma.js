angular.module('directivas').
directive('odontograma', ['$parse',
	function ($parse) {

	var directiva = {};
	directiva.restrict = 'E';
	directiva.link = function (scope, iElement, attrs) {
		
	  var existClick = attrs['piezaModificada'];
      if(angular.isDefined(existClick)){
         scope.fnModificado = $parse(attrs['piezaModificada']);
      }

	}

	directiva.scope = {
		diagnosticoSeleccionado : "=",
		tratamientoSeleccionado : "="
	};

	directiva.templateUrl = "app/scripts/controllers/odontograma/directivas/odontograma/template/odontograma.html";
	directiva.controller = "odontogramaCtrl";

	return directiva;

	
}])