function routesPacientes($stateProvider, $ocLazyLoadProvider){

	$stateProvider

    .state('app.listadoPacientes', {
        url: "/listadoPacientes",
        cache: false,
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
        pacienteDependencies(),
        azureDependencies(),
        authDependencies()
      ]);
   }

	
}