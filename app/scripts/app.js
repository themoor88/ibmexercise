'use strict';

/**
 * @ngdoc overview
 * @name ibmexerciseApp
 * @description
 * # ibmexerciseApp
 *
 * Main module of the application.
 */
angular
  .module('ibmexerciseApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
