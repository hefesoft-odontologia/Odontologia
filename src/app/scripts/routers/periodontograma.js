function routesPeriodontograma($stateProvider, $ocLazyLoadProvider){

	$stateProvider


.state('app.periodontograma', {
        url: "/periodontograma",
        cache: false,
        views: {
            'menuContent': {
                templateUrl: "app/scripts/controllers/historia/Odontologia/realizarPeriodontograma/Views/realizarPeriodontograma.html",
                resolve :{
                   controller : function($ocLazyLoad){
                     return cargarPeriodontograma($ocLazyLoad)
                   }
                }                               
            }       
          }
      });

  function cargarPeriodontograma($ocLazyLoad){
      return $ocLazyLoad.load
      ([ 
          noUiSliderDependencies(),
          imageDependencies(),
          clinicaDependencies(),         
          azureDependencies(),
          periodontogramaDependencies()
      ]);
   }
}