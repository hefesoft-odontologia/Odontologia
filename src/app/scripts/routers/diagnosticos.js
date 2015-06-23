function routesDiagnosticos($stateProvider, $ocLazyLoadProvider){

	$stateProvider

	.state('app.listadoDiagnosticos', {
        url: "/listadoDiagnosticos",
        cache: false,
        data: {
          requireLogin: true
        },
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
        imageDependencies(),
        clinicaDependencies(),
        diagnosticosDependencies(), 
        wizardDependencies(), 
        tratamientosDependencies(),
        procedimientosDependencies(),
        utilDependencies(),
        fileInputDependencies(),
        azureDependencies(),
        cieCupsDependencies(),
        fontDependencies(),
        odontogramaDependencies(),
         /* Para pruebas*/
        authDependencies()       
      ]);
   }

}