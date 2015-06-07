  angular.module('odontologiaApp')
  .directive('listadoTratamientos', [function () {
  	return {
  		restrict: 'E',
  		require: ['ngModel'],
  		link: function (scope, iElement, iAttrs, ngModelCtrl) {

       var cargarTratamiento = scope.inicializarElementos;
       ngModelCtrl[0].$render = function(){
       if (!ngModelCtrl[0].$isEmpty(ngModelCtrl[0].$viewValue)) {
          var valor = ngModelCtrl[0].$viewValue;  
          cargarTratamiento(valor);
        }
       }         			
  		},
  		controller : 'listadoTratamientosCtrl',
  		templateUrl : 'app/scripts/controllers/tratamientos/views/listado.html',
      scope:{
        ocultarAddTratamiento : '='
      }
  	};
  }])