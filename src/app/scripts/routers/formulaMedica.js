function routesFormulaMedica($stateProvider, $ocLazyLoadProvider){

	$stateProvider


.state('app.listadoFormulaNedica', {
        url: "/listadoFormulaMedica",
        cache: false,
        views: {
            'menuContent': {
                templateUrl: "app/scripts/controllers/formulaMedica/views/listado.html",
                resolve :{
                   controller : function($ocLazyLoad){
                     return cargarFormulaMedica($ocLazyLoad)
                   }
                }  
            }       
       }
});


  function cargarFormulaMedica($ocLazyLoad){
      return $ocLazyLoad.load
      ([
          imageDependencies(),
          clinicaDependencies(),
          formulaMedicaDependencies(),
          azureDependencies(),
          cieCupsDependencies()
      ]);
   }

}