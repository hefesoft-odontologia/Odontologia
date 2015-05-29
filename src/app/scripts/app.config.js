angular
  .module('odontologiaApp').config(['$stateProvider', '$urlRouterProvider', '$httpProvider',
  	function ($stateProvider, $urlRouterProvider, $httpProvider) {

      $httpProvider.defaults.withCredentials = true;
      $httpProvider.interceptors.push('authInterceptorService');

  		$urlRouterProvider.otherwise('/login');

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
                templateUrl: "app/views/main.html"
            }       
            }
      })


      /************************* Pacientes *******************************/

      .state('app.listadoPacientes', {
        url: "/listadoPacientes",
        cache: false,
        views: {
            'menuContent': {
                templateUrl: "app/views/pacientes/listado.html",
                controller : 'pacientesController'
            }       
            }
      })

      .state('app.paciente', {
        url: "/paciente",
        cache: false,
        views: {
            'menuContent': {
                templateUrl: "app/views/pacientes/paciente.html",
                controller: "pacientesController"
            }       
            }
      })

      /****************** Diagnosticos /******************/

      .state('app.listadoDiagnosticos', {
        url: "/listadoDiagnosticos",
        cache: false,
        views: {
            'menuContent': {
                templateUrl: "app/scripts/controllers/Diagnosticos/views/Diagnosticos.html",
                controller: "DxListadoCtrl"
            }       
            }
      })

      /****************** Formula medica /******************/

      .state('app.listadoFormulaNedica', {
        url: "/listadoFormulaMedica",
        cache: false,
        views: {
            'menuContent': {
                templateUrl: "app/scripts/controllers/formulaMedica/views/listado.html"                
            }       
            }
      })
           

      /******************** Auth *******************/
      .state('register', {
        url: "/register",
        cache: false,
        templateUrl : "app/views/register/register.html"        
      })

      .state('login', {
        url: "/login",
        cache: false,
        templateUrl : "app/views/register/login.html"
      })

      .state('404', {
        url: "/404",
        cache: false,
        templateUrl : "app/views/404/404.html"
      })

      .state('forgot', {
        url: "/forgot",
        cache: false,
        templateUrl : "app/views/register/forgot.html"
      })

      /*********************************************/
    
  	
  }])
