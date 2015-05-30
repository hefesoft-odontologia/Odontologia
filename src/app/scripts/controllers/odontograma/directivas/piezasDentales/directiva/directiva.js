angular.module('directivas').
directive('piezasDentales', function(){

   var directiva = {};
   directiva.require = ['ngModel'];
   directiva.restrict = 'E';

   directiva.link = function(scope, element, attrs) {

   };

   directiva.scope = {
   	piezasPermanentes : "="
   };
   
   directiva.templateUrl = 'app/scripts/controllers/odontograma/directivas/piezasDentales/template/piezasDentales.html'
   directiva.controller = 'piezasDentalesCtrl';
   return directiva;
});