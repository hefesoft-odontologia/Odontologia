function routesDiagnosticos($stateProvider, $ocLazyLoadProvider){

	$stateProvider

	.state('app.listadoDiagnosticos', {
        url: "/listadoDiagnosticos",
        cache: false,
        views: {
            'menuContent': {
                templateUrl: "app/scripts/controllers/Diagnosticos/views/Diagnosticos.html",
                controller: "DxListadoCtrl",
                resolve :{
                   controller : function($ocLazyLoad){
                     return cargarDiagnosticos($ocLazyLoad)
                   }
                }
            }       
        }
    });


   function cargarDiagnosticos($ocLazyLoad){
      return $ocLazyLoad.load
      ([
        diagnosticosDependencies(), 
        wizardDependencies(), 
        tratamientosDependencies(),
        procedimientosDependencies(),
        utilDependencies(),
        fileInputDependencies(),
        azureDependencies(),
        cieCupsDependencies()      
      ]);
   }

}