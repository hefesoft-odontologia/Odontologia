angular.module('directivas').
directive('piezaDental', function(){

   var directiva = {};
   directiva.require = ['ngModel'];
   directiva.restrict = 'E';


   directiva.link = function(scope, element, attrs, ngModelCtrl) {

    scope.item = {};
    scope.item.centro = {};

  	ngModelCtrl[0].$render = function(){
        if (!ngModelCtrl[0].$isEmpty(ngModelCtrl[0].$viewValue)) {
    		var valor = ngModelCtrl[0].$viewValue;
        scope.item = valor;
    		
      }
     }
   };
   
   directiva.scope = {
      source : '='
   };   

   directiva.templateUrl = 'app/scripts/controllers/odontograma/directivas/piezaDental/template/template.html';
   return directiva;
});