function routesHistoria($stateProvider, $ocLazyLoadProvider){

	$stateProvider


.state('app.diagnosticosPacientes', {
        url: "/diagnosticosPacientes",
        cache: false,
        data: {
          requireLogin: true,
          requirePacient : true
        },
        views: {
            'menuContent': {
                templateUrl: "app/scripts/controllers/historia/Odontologia/diagnosticosPaciente/views/diagnosticosPaciente.html",                
                resolve :{
                   controller : function($ocLazyLoad){
                     return cargarDiagnosticosPacientes($ocLazyLoad)
                   }
                }                               
            }       
          }
      })
  

  function cargarDiagnosticosPacientes($ocLazyLoad){
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
          diagnosticosPacientesDependencies(),
          /* Para pruebas*/
          authDependencies()
      ]);
   }
}