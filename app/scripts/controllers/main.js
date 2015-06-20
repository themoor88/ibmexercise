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
      $scope.images = json.photos.photo;
      $scope.title = 'title';
      $scope.id = 'id';
      console.log($scope.images);
    });
  }]);
