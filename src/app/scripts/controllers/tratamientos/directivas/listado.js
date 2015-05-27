  angular.module('odontologiaApp')
  .directive('listadoTratamientos', [function () {
  	return {
  		restrict: 'E',
  		require: ['ngModel'],
  		link: function (scope, iElement, iAttrs, ngModelCtrl) {
  			
  		},
  		controller : 'listadoTratamientosCtrl',
  		templateUrl : 'app/scripts/controllers/tratamientos/views/listado.html'  		
  	};
  }])