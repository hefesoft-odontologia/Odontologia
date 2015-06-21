function routesGallery($stateProvider, $ocLazyLoadProvider){

	$stateProvider


.state('app.gallery', {
        url: "/gallery",
        cache: false,
        data: {
          requireLogin: true,
          requirePacient : true
        },
        views: {
            'menuContent': {
                templateUrl: "app/lib/hefesoft.standard/Directivas/gallery/views/list.html",
                controller: 'listGalleryCtrl',
                resolve :{
                   controller : function($ocLazyLoad){
                     return cargarDependencias($ocLazyLoad)
                   }
                }  
            }       
       }
})

.state('app.picker', {
        url: "/picker",
        cache: false,
        data: {
          requireLogin: true,
          requirePacient : true
        },
        views: {
            'menuContent': {
                templateUrl: "app/lib/hefesoft.standard/google/directivas/picker/views/picker.html",                
                resolve :{
                   controller : function($ocLazyLoad){
                     return pickerDependencias($ocLazyLoad)
                   }
                }  
            }       
       }
});


  function cargarDependencias($ocLazyLoad){
      return $ocLazyLoad.load
      ([
          imageDependencies(),
          clinicaDependencies(),
          galleryDependencies(),
          fileInputDependencies(),
          azureDependencies(),
          authDependencies()
      ]);
   }

   function pickerDependencias($ocLazyLoad){
      return $ocLazyLoad.load
      ([
          imageDependencies(),
          clinicaDependencies(),
          azureDependencies(),
          pickerDependencies(),
          authDependencies()
      ]);
   }

}