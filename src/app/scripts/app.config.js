angular
  .module('odontologiaApp').config(['$stateProvider', '$urlRouterProvider', '$httpProvider', '$ocLazyLoadProvider',
  	function ($stateProvider, $urlRouterProvider, $httpProvider, $ocLazyLoadProvider) {

      $httpProvider.defaults.withCredentials = true;
      $httpProvider.interceptors.push('authInterceptorService');

  		$urlRouterProvider.otherwise('/login');

      configureLazy($ocLazyLoadProvider);
      routesDiagnosticos($stateProvider, $ocLazyLoadProvider);
      routesPacientes($stateProvider, $ocLazyLoadProvider);
      routesOdontograma($stateProvider, $ocLazyLoadProvider);
      routesFormulaMedica($stateProvider, $ocLazyLoadProvider);
      authOdontograma($stateProvider, $ocLazyLoadProvider);
      routesGallery($stateProvider, $ocLazyLoadProvider);
      routesClinica($stateProvider, $ocLazyLoadProvider);

  		$stateProvider

/*
  		.state('main',{
  			url: "/",
  			templateUrl : "/views/main.html"
  		})
  */

      .state('app', {
        url: "/app",
        abstract: true,
        templateUrl: "app/views/Menus/Principal.html"    
      })

      .state('app.main', {
        url: "/main",
        cache: false,
        views: {
            'menuContent': {
                templateUrl: "app/views/main.html",
                resolve :{
                 controller : function($ocLazyLoad){
                   return cargarMain($ocLazyLoad)
                 }
              }  
            }       
          }
      });

   function cargarMain($ocLazyLoad){
      return $ocLazyLoad.load
      ([
          newsDependencies(),
          importIoDependencies()
      ]);
   }

   
  }])
