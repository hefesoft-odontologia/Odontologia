angular.module('directivas')
.directive('fileUploadImageWidget', [function () {

	var directiva = {};
	directiva.restrict = 'E';
	directiva.templateUrl = "app/lib/hefesoft.standard/Directivas/fileUpload/template/imageWidget.html";	

	directiva.link = function (scope, element, iAttrs) {
	  var fileInput = $(element).find('.fileinput').fileinput();

	  fileInput.on("change.bs.fileinput", function(e){
	  	console.log(e);
	  });
	};

	

	return directiva;
	
}])