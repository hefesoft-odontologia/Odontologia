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
      pathImagen : '=' /* recordar que en el html debe ponerse asi path-imagen */
   };

   directiva.controller = 'SuperficieCtrl';   

   directiva.templateUrl = 'app/scripts/controllers/odontograma/directivas/superficies/template/superficie.html';
   return directiva;
});