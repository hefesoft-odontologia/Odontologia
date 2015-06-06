angular.module('directivas').
directive('odontograma', [function () {

	var directiva = {};
	directiva.restrict = 'E';
	directiva.link = function (scope, iElement, iAttrs) {
			
	}

	directiva.templateUrl = "app/scripts/controllers/odontograma/directivas/odontograma/template/odontograma.html";
	directiva.controller = "odontogramaCtrl";

	return directiva;

	
}])