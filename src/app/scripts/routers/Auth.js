function authOdontograma($stateProvider, $ocLazyLoadProvider){

	$stateProvider


.state('register', {
        url: "/register",
        cache: false,
        templateUrl : "app/views/register/register.html",
        resolve :{
           controller : function($ocLazyLoad){
             return cargarAuth($ocLazyLoad)
           }
        }         
      })

      .state('login', {
        url: "/login",
        cache: false,
        templateUrl : "app/views/register/login.html",
        resolve :{
           controller : function($ocLazyLoad){
             return cargarAuth($ocLazyLoad)
           }
        }   
      })

      .state('404', {
        url: "/404",
        cache: false,
        templateUrl : "app/views/404/404.html"
      })

      .state('forgot', {
        url: "/forgot",
        cache: false,
        templateUrl : "app/views/register/forgot.html",
        resolve :{
           controller : function($ocLazyLoad){
             return cargarAuth($ocLazyLoad)
           }
        } 
      })



  function cargarAuth($ocLazyLoad){
      return $ocLazyLoad.load
      ([
          authDependencies(),
          azureDependencies(),
          stripeDependencies()
      ]);
   }

}