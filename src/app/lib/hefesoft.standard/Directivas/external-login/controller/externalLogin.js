angular.module('directivas')
.controller('externalLoginCtrl', 
	['$scope', 'urlServicioFactory', '$location', 'authService', '$state', function ($scope, urlServicioFactory, location, authService, $state) {
	

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

    $scope.authCompletedCB = function (fragment) {

        $scope.$apply(function () {

            if (fragment.haslocalaccount == 'False') {

                authService.logOut();

                authService.externalAuthData = {
                    provider: fragment.provider,
                    userName: fragment.external_user_name,
                    externalAccessToken: fragment.external_access_token
                };

                $state.go("associate");
            }
            else {
                //Obtain access token and redirect to orders
                var externalData = { provider: fragment.provider, externalAccessToken: fragment.external_access_token };
                authService.obtainAccessToken(externalData).then(function (response) {

                $state.go("app.main");
                //$location.path('/orders');

                },
             function (err) {
                 $scope.message = err.error_description;
             });
            }

        });
    }

}])