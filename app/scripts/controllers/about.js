'use strict';

/**
 * @ngdoc function
 * @name helloworldApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the helloworldApp
 */
angular.module('leagueApp')
  .controller('AboutCtrl', function ($scope,worldCupService) {
  	worldCupService.getPlayers().then(function(data){
  		$scope.data = data;
  	});
    $scope.sortOrder = 'PlayerName';
  });