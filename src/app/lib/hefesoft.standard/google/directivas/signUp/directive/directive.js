angular.module('hefesoft.google')
.directive('signUpGoogle', 
	['$parse', function ($parse) {

	var directiva = {};
	directiva.restrict = "E";
	directiva.templateUrl = "app/lib/hefesoft.standard/google/directivas/signUp/template/template.html";
	
	directiva.link = function(scope, element, attrs) {
		gapi.signin2.render(element[0], {
        'scope': 'https://www.googleapis.com/auth/plus.login',        
        'longtitle': false,        
        'onsuccess': onSuccess,
        'onfailure': onFailure
      });

	   var existClick = attrs['sigIn'];
       if(angular.isDefined(existClick)){
          scope.fnSigIn = $parse(attrs['sigIn']);
       }

       function onSuccess(googleUser) {      

      	if(angular.isDefined(scope.fnSigIn) && angular.isFunction(scope.fnSigIn)){
            scope.fnSigIn(scope, { 'item' : googleUser.getBasicProfile() });
        }
	  }

	  function onFailure(error) {
	    console.log(error);
	  }
	}

	return directiva;
}])