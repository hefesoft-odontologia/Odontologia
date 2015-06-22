angular.module('odontologiaApp')
.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', '$ocLazyLoadProvider',
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
      routesPeriodontograma($stateProvider, $ocLazyLoadProvider);
      agendaClinica($stateProvider, $ocLazyLoadProvider);
      externalLogin($stateProvider, $ocLazyLoadProvider);

  		$stateProvider

      .state('app', {
        url: "/app",
        abstract: true,
        templateUrl: "app/views/Menus/Principal.html"    
      })

      .state('app.main', {
        url: "/main",
        cache: false,
        data: {
          requireLogin: true
        },
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
          imageDependencies(),
          clinicaDependencies(),
          newsDependencies(),
          importIoDependencies(),          
          azureDependencies()
      ]);
   }
}])

.run(function ($rootScope, $state) {
  $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
    if(angular.isDefined(toState.data)){
      var requireLogin = toState.data.requireLogin;
      var requirePacient = toState.data.requirePacient;
    }

    if (requireLogin && typeof $rootScope.currentUser === 'undefined') {
      event.preventDefault();
      $state.go('login');
    }

    else if (requirePacient && typeof $rootScope.currentPacient === 'undefined') {
      event.preventDefault();
      $state.go('app.listadoPacientes');
    }

  })
})
