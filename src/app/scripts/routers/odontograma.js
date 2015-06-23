function routesOdontograma($stateProvider, $ocLazyLoadProvider){

	$stateProvider


.state('app.odontograma', {
        url: "/odontograma",
        cache: false,
        data: {
          requireLogin: true,
          requirePacient : true
        },
        views: {
            'menuContent': {
                templateUrl: "app/scripts/controllers/historia/Odontologia/realizarOdontograma/views/realizarOdontograma.html",                
                resolve :{
                   controller : function($ocLazyLoad){
                     return cargarOdontograma($ocLazyLoad)
                   }
                }                               
            }       
          }
      })


  .state('app.planTratamiento', {
        url: "/planTratamiento",
        cache: false,
        data: {
          requireLogin: true,
          requirePacient : true
        },
        views: {
            'menuContent': {
                templateUrl: "app/scripts/controllers/historia/Odontologia/planTratamiento/views/planTratamiento.html",                
                resolve :{
                   controller : function($ocLazyLoad){
                     return cargarPlanTratamiento($ocLazyLoad)
                   }
                }                               
            }       
          }
      });

  function cargarOdontograma($ocLazyLoad){
      return $ocLazyLoad.load
      ([
          imageDependencies(),
          clinicaDependencies(),
          diagnosticosDependencies(),
          odontogramaDependencies(),
          azureDependencies(),
          drillDownDependencies(),
          procedimientosDependencies(),
          historiaDependencies(),
          tratamientosDependencies(),
          cieCupsDependencies(),
          /* Para pruebas*/
          authDependencies()
      ]);
   }

   function cargarPlanTratamiento($ocLazyLoad){
      return $ocLazyLoad.load
      ([
          imageDependencies(),
          clinicaDependencies(),
          diagnosticosDependencies(),
          odontogramaDependencies(),
          azureDependencies(),
          drillDownDependencies(),
          procedimientosDependencies(),
          historiaDependencies(),
          tratamientosDependencies(),
          cieCupsDependencies(),
          planTratamientoDependencies(),
          /* Para pruebas*/
          authDependencies()
      ]);
   }
}