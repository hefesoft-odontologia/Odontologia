angular.module('directivas')
.directive('fileUploadImageWidget', 
	['uploadService', function (uploadService) {

	var urlUploadFiles = "http://hefesoft.blob.core.windows.net/files/files?sv=2014-02-14&sr=c&sig=RqRcu1vwp56UdXTdRpZfEEWzv7rYrDT87B5iZafAOS4%3D&st=2015-05-15T05%3A00%3A00Z&se=2030-12-02T05%3A00%3A00Z&sp=rwl";       
    var path = "http://hefesoft.blob.core.windows.net/files/files/";
    

	var directiva = {};
	directiva.restrict = 'E';
	directiva.templateUrl = "app/lib/hefesoft.standard/Directivas/fileUpload/template/imageWidget.html";	

	directiva.link = function (scope, element, iAttrs) {

	  var options = 
	  {
	  	'showUpload':false,
	  	'language': 'es', 
	  	'showCaption' : false,
	  	'maxFileSize' : 2000
	  };

	  var fileInput = $(element).find('.file').fileinput(options);

	  fileInput.on('fileloaded', function(event, file, previewId, index, reader) {
	  	 //nombre de la imagen
	  	 file.blobname = window.Hefesot.random();
    	 uploadService.upload(file, urlUploadFiles).then(success);
	  });
	};

	function success(e){
		console.log(e);
	}

	return directiva;
	
}])