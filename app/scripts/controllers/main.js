'use strict';

/**
 * @ngdoc function
 * @name ibmexerciseApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ibmexerciseApp
 */
angular.module('ibmexerciseApp')
  .controller('MainCtrl', ['$scope', 'imagesFactory', function($scope, imagesFactory) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    console.log($scope.awesomeThings);
  }]);
