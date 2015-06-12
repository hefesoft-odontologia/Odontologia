function routesClinica($stateProvider, $ocLazyLoadProvider){

	$stateProvider


.state('app.datosclinica', {
        url: "/datosclinica",
        cache: false,
        views: {
            'menuContent': {
                templateUrl: "app/scripts/controllers/Clinica/views/Datos_Clinica.html",
                controller: "datosClinicaCtrl",
                resolve :{
                   controller : function($ocLazyLoad){
                     return cargarClinica($ocLazyLoad)
                   }
                }                               
            }       
          }
      });

  function cargarClinica($ocLazyLoad){
      return $ocLazyLoad.load
      ([
        fileInputDependencies(),
        azureDependencies(),
        clinicaDependencies()
      ]);
   }
}