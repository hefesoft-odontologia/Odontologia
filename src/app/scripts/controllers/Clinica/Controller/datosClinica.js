angular.module('odontologiaApp')
.controller('datosClinicaCtrl', 
	['$scope', 'dataTableStorageFactory', 'image64Service', '$rootScope',
	function ($scope, dataTableStorageFactory, image64Service, $rootScope) {
	
	$scope.clinica = {};
	$scope.cambiarImagen = false;
	var dataImagen64;

	$scope.cancelarClick = function(){
		$scope.cambiarImagen = false;
	}

	$scope.cambiarImagenClick = function(){
		$scope.cambiarImagen = true;		
	}

	$scope.guardar = function(){
		
		$scope.clinica['nombreTabla'] = 'TmDatosClinica';
		$scope.clinica['PartitionKey'] = $rootScope.currentUser.id;
		$scope.clinica['RowKey'] = "1";
		
		dataTableStorageFactory.saveStorage($scope.clinica);
		        

		//pdfTest();
	}

	$scope.fileUpload = function(item){
		$scope.cambiarImagen = false;
		$scope.guardar();	
	}

	function inicializarElementos(){
	dataTableStorageFactory.getTableByPartitionAndRowKey('TmDatosClinica', $rootScope.currentUser.id, "1")
      .success(function(data){
      	if(!data == null){
      	   $scope.clinica = data;
      	}
      	else{
      	   $scope.clinica = {};
      	   $scope.clinica.pathImagen = $rootScope.currentUser.picture;
      	   $scope.clinica.nombreEntidad = $rootScope.currentUser.name;
      	   $scope.clinica.email = $rootScope.currentUser.email;
      	}
      	//image64Service.convertImgToBase64(data.pathImagen, image64);
   	  }).error(function(error){
      	console.log(error);          
      })
	}

	function image64(data){
		dataImagen64 = data;
	}

	function pdfTest(){
		var columns = [
	    {title: "ID", key: "id"},
	    {title: "Name", key: "name"}, 
	    {title: "Country", key: "country"}, 
	    {title: "Email", key: "email"}
		];
		var data = [
		    {"id": 1, "name": "Shaw", "country": "Tanzania", "email": "abrown@avamba.info"},
		    {"id": 2, "name": "Nelson", "country": "Kazakhstan", "email": "jjordan@agivu.com"},
		    {"id": 3, "name": "Garcia", "country": "Madagascar", "email": "jdean@skinte.biz"}		    
		];

		var doc = new jsPDF('p', 'pt');
		doc.text($scope.clinica.razonSocial, 100, 60);
		doc.addImage(dataImagen64, 'JPEG', 30, 40, 50, 50);
		doc.autoTable(columns, data, {startY: 120});
		doc.save('table.pdf');
	}

	inicializarElementos();

}])