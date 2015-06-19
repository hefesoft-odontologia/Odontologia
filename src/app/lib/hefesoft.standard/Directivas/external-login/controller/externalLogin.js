angular.module('directivas')
.controller('externalLoginCtrl', 
	['$scope', 'urlServicioFactory', '$location', function ($scope, urlServicioFactory, location) {
	

	 $scope.authExternalProvider = function (provider) {

	 	var urlBase = urlServicioFactory.getUrlService();
	 	var clientId = "ngAuthApp";

        var redirectUri = "http://localhost:8080/src/authComplete.html";
        var externalProviderUrl = urlBase + "Account/ExternalLogin?provider=" + provider
                                                                    + "&response_type=token&client_id=" + clientId 
                                                                    + "&redirect_uri=" + redirectUri;
        window.$windowScope = $scope;
        var oauthWindow = window.open(externalProviderUrl, "Authenticate Account", "location=0,status=0,width=600,height=750");
    };

}])