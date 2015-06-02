function routesOdontograma($stateProvider, $ocLazyLoadProvider){

	$stateProvider


.state('app.odontograma', {
        url: "/odontograma",
        cache: false,
        views: {
            'menuContent': {
                templateUrl: "app/scripts/controllers/odontograma/views/odontograma.html",
                controller: 'odontogramaCtrl',
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
          azureDependencies()
      ]);
   }

}