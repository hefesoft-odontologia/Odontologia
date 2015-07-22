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
      esanumNews($stateProvider, $ocLazyLoadProvider);
      routesHistoria($stateProvider, $ocLazyLoadProvider);

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
          azureDependencies(),
          esanumDependencies(),
          fbDependencies(),
          notificationDependencies(),
          /* Pruebas */
          authDependencies()
      ]);
   }
}])

.run(function ($rootScope, $state) {
  $rootScope.$on('$stateChangeStart', function (event, toState, toParams, from, form2) {

    var hefesoftConstants = initialParmeters();
    
    if(hefesoftConstants.modo == "desarrollo"){
      $rootScope.currentUser = hefesoftConstants.usuario;
      $rootScope.currentPacient = hefesoftConstants.paciente;
      $rootScope.currentDiagnostico = 201;
    }
    else{
      if(angular.isDefined(toState.data)){
        var requireLogin = toState.data.requireLogin;
        var requirePacient = toState.data.requirePacient;
        var requirePacientDiagnostic = toState.data.requirePacientDiagnostic;
      }

      if (requireLogin && typeof $rootScope.currentUser === 'undefined') {
        event.preventDefault();
        $state.go('login');
      }

      else if (requirePacient && typeof $rootScope.currentPacient === 'undefined') {
        event.preventDefault();
        $state.go('app.listadoPacientes');
      }
      else if (requirePacientDiagnostic && typeof $rootScope.currentDiagnostico === 'undefined') {
        event.preventDefault();
        $state.go('app.listadoPacientes');
      }
    }

  })
})


function initialParmeters(){
   var data = {
      usuario : { email: "futbolito152@gmail.com", family_name: "Ramirez Espitia", gender: "male", given_name: "Jose Douglas", id: "101922266897286987361", link: "https://plus.google.com/101922266897286987361", locale: "es", name: "Jose Douglas Ramirez Espitia", picture: "https://lh5.googleusercontent.com/-MKv6GOxyhAU/AAAAAAAAAAI/AAAAAAAADVM/h7f1KrIo-mg/photo.jpg"},
      paciente : {$$hashKey: "object:26", Estado_Entidad: "1", PartitionKey: "101922266897286987361", RowKey: "102", generarIdentificador: "False", nombre: "Usuario de prueba", nombreTabla: "TmPacientes", urlImagen: "https://hefesoft.blob.core.windows.net/profile/profile.png"},
      modo : "desarrollo"
    }
    return data;
}
