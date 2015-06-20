angular.module('hefesoft.google')
.controller('googlePickerCtrl', 
	['$scope', 'googlePickerService', '$q', function ($scope, googlePickerService, $q) {

	$scope.mostrarBotonAutorizar = false;
	var developerKey = 'AIzaSyDqLLd0jtzOSqJzZcXVeB70-72PmoBwjRE';
	var pickerApiLoaded;
	var oauthToken;
	var carpeta = "odontologia_usuario";

	function inicializar(){
		googlePickerService.getAuth().then(autorizado, noAutorizado);
	}

	$scope.auth = function(){
		googlePickerService.auth().then(autorizado, noAutorizado);
	}

	function noAutorizado(data){
		$scope.mostrarBotonAutorizar = true;
	}
	
	function autorizado(data){
		oauthToken = data.access_token;
		googlePickerService.load(callback);
	}

	function callback(){
	    onPickerApiLoad();		
	}

	function onPickerApiLoad() {
        pickerApiLoaded = true;        
        getFolder(carpeta).then(carpetaExiste);
    }

    function carpetaExiste(result){

    	//la carpeta no ha sido creada
    	if(angular.isDefined(result.error) && result.error.code == 404){
    		createFolder(carpeta).then(function(){
        		createPicker();	
        	})
    	}
    	else{
    		createPicker();
    	}

    }


    function createPicker() {
       if (pickerApiLoaded && oauthToken) {
       	 var uploadView = new google.picker.DocsUploadView().setIncludeFolders(true);
       	 var photoView = new google.picker.PhotosView().setParent(carpeta);
       	 var webCamView = new google.picker.WebCamView().setParent(carpeta);

         var picker = new google.picker.PickerBuilder().
         	 enableFeature(google.picker.Feature.MULTISELECT_ENABLED).
             addView(uploadView).
             addView(photoView).
             addView(webCamView).             
             setLocale('es').
             setOAuthToken(oauthToken).
             setDeveloperKey(developerKey).
             setCallback(pickerCallback).
             setTitle("Carga de adjuntos").
             build();
         picker.setVisible(true);
       }
     }

     function pickerCallback(data) {
        var url = 'nothing';
        if (data[google.picker.Response.ACTION] == google.picker.Action.PICKED) {
          var doc = data[google.picker.Response.DOCUMENTS][0];
          url = doc[google.picker.Document.URL];
        }
        var message = 'You picked: ' + url;
        document.getElementById('result').innerHTML = message;
     }

     function createFolder(nombreFolder) {
	   var access_token = oauthToken;

	   var deferred = $q.defer();
	   var request = gapi.client.request({
	       'path': '/drive/v2/files/',
	       'method': 'POST',
	       'headers': {
	           'Content-Type': 'application/json',
	           'Authorization': 'Bearer ' + access_token,             
	       },
	       'body':{
	           "title" : nombreFolder,
	           "mimeType" : "application/vnd.google-apps.folder",
	       }
	   });

	   request.execute(function(resp) { 
	       console.log(resp);
	       deferred.resolve(resp);
	   });

	   return deferred.promise;
  	}

  	function getFolder(nombreFolder) {
	   var access_token = oauthToken;

	   var deferred = $q.defer();
	   var request = gapi.client.request({
	       'path': '/drive/v2/files/'+ nombreFolder,
	       'method': 'GET',
	       'headers': {
	           'Content-Type': 'application/json',
	           'Authorization': 'Bearer ' + access_token,             
	       }
	   });

	   request.execute(function(resp) { 
	       console.log(resp);
	       deferred.resolve(resp);
	   });

	   return deferred.promise;
  	}

	inicializar();
}])