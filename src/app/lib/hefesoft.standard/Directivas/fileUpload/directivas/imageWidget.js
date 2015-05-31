angular.module('directivas')
.directive('fileUploadImageWidget', [function () {

	var directiva = {};
	directiva.restrict = 'E';
	directiva.templateUrl = "app/lib/hefesoft.standard/Directivas/fileUpload/template/imageWidget.html";	

	directiva.link = function (scope, element, iAttrs) {
	  var fileInput = $(element).find('.file').fileinput();

	  fileInput.on('fileloaded', function(event, file, previewId, index, reader) {
    	console.log("fileloaded");
	  });
	};

	

	return directiva;
	
}])