'use strict';

/**
 * @ngdoc service
 * @name ibmexerciseApp.imagesFactory
 * @description
 * # imagesFactory
 * Factory in the ibmexerciseApp.
 */
angular.module('ibmexerciseApp')
  .factory('imagesFactory', ['$http', function($http) {
    var endPoint = 'https://api.flickr.com/services/rest/',
        method = 'flickr.people.getPublicPhotos',
        apiKey = 'a5e95177da353f58113fd60296e1d250',
        userId = '132365033@N08',
        format = 'json';

    return {
      getImages: function () {
        return $http.get(
          endPoint + '?method=' + method + '&api_key=' + apiKey + '&user_id=' + userId + '&format=' + format + '&nojsoncallback=1'
        );
      }
    };

  }]);
