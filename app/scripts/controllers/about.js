'use strict';

/**
 * @ngdoc function
 * @name helloworldApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the helloworldApp
 */
angular.module('leagueApp')
  .controller('AboutCtrl', function ($scope,$http) {
    $http.get("http://theleaguewk2014.azurewebsites.net/home/playersjson").success(function(data){
    	$scope.data = data;
    });
    $scope.sortOrder = "PlayerName";

    $scope.isActive = function(route) {
        return route === $location.path();
    }
  });