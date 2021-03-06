function agendaClinica($stateProvider, $ocLazyLoadProvider){

	$stateProvider


.state('app.agenda', {
        url: "/agenda",
        cache: false,
        data: {
          requireLogin: true
        },
        views: {
            'menuContent': {
                templateUrl: "app/scripts/controllers/Agenda/Views/agenda.html",
                controller: "AgendaCtrl",
                resolve :{
                   controller : function($ocLazyLoad){
                     return cargarAgenda($ocLazyLoad)
                   }
                }                               
            }       
          }
      });

  function cargarAgenda($ocLazyLoad){
      return $ocLazyLoad.load
      ([        
        dateDependencies(),
        azureDependencies(),
        clinicaDependencies(),
        imageDependencies(),
        calendarDependencies(),
        agendaDependencies(),
        
        /* Para pruebas*/
          authDependencies()
      ]);
   }
}