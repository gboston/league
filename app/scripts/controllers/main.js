'use strict';

/**
 * @ngdoc function
 * @name helloworldApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the helloworldApp
 */
angular.module('leagueApp')
  .controller('MainCtrl', function ($scope,$http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $http.get("http://theleaguewk2014.azurewebsites.net/home/indexjson").success(function(data){
    	$scope.data = data.Teams;
    });

    $scope.isActive = function(route) {
        return route === $location.path();
    }
  });
