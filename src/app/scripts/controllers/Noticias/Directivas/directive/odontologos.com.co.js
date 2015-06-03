angular.module('directivas').
directive('odontologoscomco', function(){

   var directiva = {};   
   directiva.restrict = 'E';

   directiva.link = function(scope, element, attrs) {
      
   };   
  

   directiva.controller = 'odontologoscomcoCtrl';   

   directiva.templateUrl = 'app/scripts/controllers/Noticias/Directivas/template/odontologos.com.co.html';
   return directiva;
});