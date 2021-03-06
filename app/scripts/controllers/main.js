'use strict';

/**
 * @ngdoc function
 * @name helloworldApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the helloworldApp
 */
angular.module('leagueApp')
  .controller('MainCtrl', function ($scope,worldCupService) {
    worldCupService.getRanking().then(function(data){
      $scope.data = data.Teams;
    });
  });
