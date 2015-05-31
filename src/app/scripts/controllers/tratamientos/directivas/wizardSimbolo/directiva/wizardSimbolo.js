angular.module('directivas')
.directive('wizardSimbolo', [function () {

	var directiva = {};
	directiva.restrict = 'E';
	directiva.templateUrl = "app/scripts/controllers/tratamientos/directivas/wizardSimbolo/template/wizardSimbolo.html";
	directiva.controller = "wizardSimboloCtrl";

	directiva.link = function (scope, iElement, iAttrs) {			
	};


	return directiva;
	
}])