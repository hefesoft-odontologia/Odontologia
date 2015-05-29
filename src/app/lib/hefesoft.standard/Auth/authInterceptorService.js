/*
    Se utiliza para pasar el token en el header de autenticacion
*/

angular.module('auth')
.factory('authInterceptorService', ['$q', '$localstorage',
    function ($q, $localstorage) {
 
    var Hefesot = window.Hefesot;
    var authInterceptorServiceFactory = {};

    
    var _request = function (config) {
        config.headers = config.headers || {};        
        var authData = $localstorage.getObject('authorizationData');
        config.headers.Authorization = authData.access_token;
        config.data = Hefesot.listTostring(config.data, config.method);
        return config;
    }
 
    var _responseError = function (rejection) {
        if (rejection.status === 401) {
            $location.path('/login');
        }
        return $q.reject(rejection);
    }

    var _response = function (response) {        
        Hefesot.procesarList(response.data);
        return response;
    }
 
    authInterceptorServiceFactory.request = _request;
    authInterceptorServiceFactory.responseError = _responseError;
    authInterceptorServiceFactory.response = _response;
 
    return authInterceptorServiceFactory;
}])
