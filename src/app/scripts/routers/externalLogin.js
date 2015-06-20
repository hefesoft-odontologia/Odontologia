function externalLogin($stateProvider, $ocLazyLoadProvider){

  $stateProvider


.state('associate', {
        url: "/associate",
        cache: false,
        templateUrl : "app/lib/hefesoft.standard/Directivas/external-login/views/associate.html",
        resolve :{
           controller : function($ocLazyLoad){
             return cargarExternalLogin($ocLazyLoad)
           }
        }         
      })


  function cargarExternalLogin($ocLazyLoad){
      return $ocLazyLoad.load
      ([
          authDependencies(),
          azureDependencies(),
          stripeDependencies()
      ]);
   }

}