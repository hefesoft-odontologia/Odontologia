 //var serviceBase = 'http://localhost:3481/';
 var serviceBase = 'https://hefesoftdynamicbackend.azurewebsites.net/';
  
 angular.module('auth')  
 .constant('ngAuthSettings', {
      apiServiceBaseUri: serviceBase,
      clientId: 'ngAuthApp'
});