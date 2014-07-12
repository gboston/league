'use strict';

/**
 * @ngdoc function
 * @name leagueApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the leagueApp
 */
angular.module('leagueApp')
  .controller('HeaderCtrl', function ($scope,$location) {

  	$scope.isActive = function(route) {
        return route === $location.path();
    };
  });
