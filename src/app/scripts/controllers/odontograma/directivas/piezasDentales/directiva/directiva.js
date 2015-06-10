angular.module('directivas').
directive('piezasDentales', function($parse){

   var directiva = {};
   directiva.require = ['ngModel'];
   directiva.restrict = 'E';

   directiva.link = function(scope, element, attrs, ngModelCtrl) {

      var existClick = attrs['modificado'];
      if(angular.isDefined(existClick)){
         scope.fnModificado = $parse(attrs['modificado']);
      }

      var existClick = attrs['clickCallback'];
      if(angular.isDefined(existClick)){
         scope.fnClick = $parse(attrs['clickCallback']);
      }

      if(scope.contexto){
         scope.contexto = function(){
            return scope;
         } 
      }

      ngModel(ngModelCtrl, scope);
   };

   directiva.scope = {
   	permanente : "=",
      numeroPiezaModificada : '=',
      contexto : '='
   };
   
   directiva.templateUrl = 'app/scripts/controllers/odontograma/directivas/piezasDentales/template/piezasDentales.html'
   directiva.controller = 'piezasDentalesCtrl';

   function ngModel(ngModelCtrl, scope){      
      ngModelCtrl[0].$render = function(){
        if (!ngModelCtrl[0].$isEmpty(ngModelCtrl[0].$viewValue)) {
         var valor = ngModelCtrl[0].$viewValue;
         }
      }
   }


   return directiva;
});