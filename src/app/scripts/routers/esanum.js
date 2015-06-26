

function esanumNews($stateProvider, $ocLazyLoadProvider){

	$stateProvider


.state('app.esanum', {
        url: "/esanum",
        cache: false,
        data: {
          requireLogin: true
        },
        views: {
            'menuContent': {
                templateUrl: "app/scripts/controllers/Noticias/views/esanum.html",                
                resolve :{
                   controller : function($ocLazyLoad){
                     return cargarEsanum($ocLazyLoad)
                   }
                }                               
            }       
          }
      });

  function cargarEsanum($ocLazyLoad){
      return $ocLazyLoad.load
      ([        
          imageDependencies(),
          clinicaDependencies(),
          newsDependencies(),
          importIoDependencies(),          
          azureDependencies(),
          esanumDependencies(),

          /* Pruebas */
          authDependencies()
      ]);
   }
}