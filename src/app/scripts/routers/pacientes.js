function routesPacientes($stateProvider, $ocLazyLoadProvider){

	$stateProvider

    .state('app.listadoPacientes', {
        url: "/listadoPacientes",
        cache: false,
        data: {
          requireLogin: true
        },
        views: {
            'menuContent': {
                templateUrl: "app/views/pacientes/listado.html",
                controller : 'pacientesController',
                resolve :{
                   controller : function($ocLazyLoad){
                     return cargarPacientes($ocLazyLoad)
                   }
                }
            }       
        }
      })

      .state('app.paciente', {
        url: "/paciente",
        cache: false,
        data: {
          requireLogin: true
        },
        views: {
            'menuContent': {
                templateUrl: "app/views/pacientes/paciente.html",
                controller: "pacientesController"
            }       
            }
      });


       function cargarPacientes($ocLazyLoad){
      return $ocLazyLoad.load
      ([
        imageDependencies(),
        clinicaDependencies(),
        pacienteDependencies(),
        dateDependencies(),
        azureDependencies(),
        authDependencies()
      ]);
   }
}