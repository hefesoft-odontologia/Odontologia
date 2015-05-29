/*
    Se utiliza para pasar el token en el header de autenticacion
*/

angular.module('auth')
.factory('authInterceptorService', ['$q', '$localstorage',
    function ($q, $localstorage) {
 
    var authInterceptorServiceFactory = {};

    function convertirListasAString(item){
        for (var i in item)
        {
            var n = i.indexOf("array");
            var m = i.indexOf("object");

            if(n >=0 || m >=0){
                item[i] = JSON.stringify(item[i]);
            }          
        }

        return item;
    }

    function convertirstringAListas(item){
        for (var i in item)
        {
            var n = i.indexOf("array");
            var m = i.indexOf("object");

            if(n >=0 || m >=0){
                item[i] = JSON.parse(item[i]);
            }          
        }

        return item;
    }
    
    var _request = function (config) {
        config.headers = config.headers || {};        
        var authData = $localstorage.getObject('authorizationData');
        config.headers.Authorization = authData.access_token;

        var aplicarTransformarObjetos = (!angular.isUndefined(config.data) && config.method === "POST");

         if(aplicarTransformarObjetos){
            var esArray = (Array.isArray(config.data));
            if(esArray){
                for (x in config.data) {
                    var data = config.data[x];
                    config.data[x] = convertirListasAString(data);
                }               
            }
            else{
                config.data = convertirListasAString(config.data);
            }
        }
        

        return config;
    }
 
    var _responseError = function (rejection) {
        if (rejection.status === 401) {
            $location.path('/login');
        }
        return $q.reject(rejection);
    }

    var _response = function (response) {
        var esObjeto = (!angular.isUndefined(response.data) && response.data !== null && typeof response.data === 'object');

        if(esObjeto){
            var esArray = (Array.isArray(response.data));
            if(esArray){
                for (x in response.data) {
                    var data = response.data[x];
                    response.data[x] = convertirstringAListas(data);
                }               
            }
            else{
                response.data = convertirstringAListas(response.data);
            }
        }
        return response;
    }
 
    authInterceptorServiceFactory.request = _request;
    authInterceptorServiceFactory.responseError = _responseError;
    authInterceptorServiceFactory.response = _response;
 
    return authInterceptorServiceFactory;
}])
