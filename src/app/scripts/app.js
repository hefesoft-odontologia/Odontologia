'use strict';

/**
 * @ngdoc overview
 * @name odontologiaApp
 * @description
 * # odontologiaApp
 *
 * Main module of the application.
 */

angular
  .module('odontologiaApp', 
[
    'oc.lazyLoad',
	  'ui.router', 
  	'auth', 
  	'azure',
  	'Util',
  	'W8',
  	'Stripe',
  	'SignalR',
  	'Shared',
  	'Message',
  	'Global',
  	'directivas',
  	'angular-loading-bar',
  	'ui.bootstrap',
    'ngSanitize'
]);


  
