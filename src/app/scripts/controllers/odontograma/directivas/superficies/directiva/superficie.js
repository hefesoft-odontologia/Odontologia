angular.module('directivas').
directive('superficie', function(){

   var directiva = {};
   //directiva.require = ['ngModel'];
   directiva.restrict = 'E';

   directiva.link = function(scope, element, attrs, ngModelCtrl) {
      
   };
   
   directiva.scope = {
      color : '=',
      simbolo : '=',
      fuente : '=',
      pathImagen : '='
   };   

   directiva.templateUrl = 'app/scripts/controllers/odontograma/directivas/superficies/template/superficie.html';
   return directiva;
});