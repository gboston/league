'use strict';

/**
 * @ngdoc service
 * @name leagueApp.Worldcup
 * @description
 * # Worldcup
 * Service in the leagueApp.
 */
angular.module('leagueApp')
  .service('worldCupService', function($http,$q) {
      // AngularJS will instantiate a singleton by calling "new" on this function
    // this.alert = function() {
    //     alert('hello');
    // };
    this.getPlayers = function(){
    	var result = $q.defer();
    	$http.get('http://theleaguewk2014.azurewebsites.net/home/playersjson').success(function(data){
    		result.resolve(data);
    	});
    	return result.promise;
    };

    this.getRanking = function(){
    	var result = $q.defer();
    	$http.get('http://theleaguewk2014.azurewebsites.net/home/indexjson').success(function(data){
    		result.resolve(data);
    	});
    	return result.promise;
    };
    
});
