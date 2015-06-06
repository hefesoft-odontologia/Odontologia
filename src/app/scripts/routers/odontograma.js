function routesOdontograma($stateProvider, $ocLazyLoadProvider){

	$stateProvider


.state('app.odontograma', {
        url: "/odontograma",
        cache: false,
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
      });

  function cargarOdontograma($ocLazyLoad){
      return $ocLazyLoad.load
      ([
          odontogramaDependencies(),
          azureDependencies(),
          drillDownDependencies(),
          historiaDependencies()
      ]);
   }
}