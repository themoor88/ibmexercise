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
    imagesFactory.getImages().success(function(json){
      $scope.image = json.photos.photo;
      console.log($scope.image);
    });
  }]);
