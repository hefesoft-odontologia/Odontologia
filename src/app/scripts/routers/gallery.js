function routesGallery($stateProvider, $ocLazyLoadProvider){

	$stateProvider


.state('app.gallery', {
        url: "/gallery",
        cache: false,
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
});


  function cargarDependencias($ocLazyLoad){
      return $ocLazyLoad.load
      ([
          galleryDependencies(),
          fileInputDependencies(),
          azureDependencies()
      ]);
   }

}