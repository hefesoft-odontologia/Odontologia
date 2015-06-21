angular.module('hefesoft.google')
.controller('googlePickerCtrl', 
	['$scope', 'googlePickerService', 'driveApi', '$q', function ($scope, googlePickerService, driveApi, $q) {

	$scope.mostrarBotonAutorizar = false;
	var developerKey = 'AIzaSyDqLLd0jtzOSqJzZcXVeB70-72PmoBwjRE';
	var pickerApiLoaded;
	var oauthToken;
	var carpeta = "odontologia_usuario";
	var idFolder;
	var picker;

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
		driveApi.loadApi().then(function(result){
			console.log(result);
		})
	}

	function callback(){
	    onPickerApiLoad();		
	}

	function onPickerApiLoad() {
        pickerApiLoaded = true;        
        getFolder(carpeta).then(carpetaExiste);
    }

    $scope.mostrarPicker = function(){
    	picker.setVisible(true);
    }

    function carpetaExiste(result){

    	//la carpeta no ha sido creada
    	if(result.items.length === 0){
    		createFolder(carpeta).then(function(){
        		createPicker();	
        	})
    	}
    	else{
    		idFolder = result.items[0].id;
    		createPicker();
    	}

    }


    function createPicker() {
       if (pickerApiLoaded && oauthToken) {
       	 var uploadView = new google.picker.DocsUploadView().setParent(idFolder);
       	 var docsView = new google.picker.DocsView().setParent(idFolder).setMode(google.picker.DocsViewMode.GRID);       	 
       	 var webCamView = new google.picker.WebCamView().setParent(idFolder);

         	picker = new google.picker.PickerBuilder().
         	 enableFeature(google.picker.Feature.MULTISELECT_ENABLED).                          
             addView(docsView).
             addView(uploadView).
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
        if (data[google.picker.Response.ACTION] == google.picker.Action.PICKED && data.viewToken[0] == "all") {
          var doc = data[google.picker.Response.DOCUMENTS][0];
          url = doc[google.picker.Document.URL];

          window.open(url);
        }
        //var message = 'You picked: ' + url;
        //document.getElementById('result').innerHTML = message;
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
	       deferred.resolve(resp);
	       idFolder = resp.id;
	   });

	   return deferred.promise;
  	}

  	function getFolder(nombreFolder) {
	   var access_token = oauthToken;
	   var query = "/drive/v2/files?maxResults=5&q=mimeType%3D'application%2Fvnd.google-apps.folder'and(title%3D+'" + nombreFolder+"')andtrashed+%3D+false&fields=items(alternateLink%2Cid%2CwebViewLink%2Ctitle)";
	   var deferred = $q.defer();
	   var request = gapi.client.request({
	       'path': query,
	       'method': 'GET',
	       'headers': {
	           'Content-Type': 'application/json',
	           'Authorization': 'Bearer ' + access_token,             
	       }
	   });

	   request.execute(function(resp) { 	       
	       deferred.resolve(resp);
	   });

	   return deferred.promise;
  	}

	inicializar();
}])