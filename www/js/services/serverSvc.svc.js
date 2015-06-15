'use strict';
angular.module('starter')
	.factory('ServerSvc', ServerSvc);


function ServerSvc($http){
     
    var factory = {}; 
 	

	factory.rootUrl = 'http://10.11.126.128:8000/games';
	factory.gameObj = {"_id":"557d33cd665f2ed7160f065b","gold":30,"districts":{"tavern":5,"market":4,"tradingPost":3,"docks":3,"harbor":3,"townHall":2,"temple":3,"church":3,"monastery":3,"cathedral":2,"watchtower":3,"prison":3,"battlefield":3,"fortress":2,"manor":5,"castle":4,"palace":3,"hauntedCity":1,"keep":2,"laboratory":1,"smithy":1,"graveyard":1,"observatory":1,"schoolofMagic":1,"library":1,"greatWall":1,"university":1,"dragonGate":1},"players":[{"userId":"Jonah","gold":0,"districts":{}}],"crownPlayerIndex":0,"currentRound":1,"currentPlayerIndex":0,"rounds":[{"characters":["assassin","thief","king","bishop","merchant","architect","warlord"],"hiddenCharacter":"magician","faceUpCharacters":[],"started":true,"players":{},"state":"chooseCharacters"}]};
	factory.setGameObj = function(jsonObj){
		factory.gameObj = jsonObj;
	};
    factory.setPost = function(url, data, successCallback) {
		console.log("POST :: url: " + factory.rootUrl + url + " data: " + data);
		$http.post(factory.rootUrl + url, data).
		    success(successCallback).
		    error(function(data, status, headers, config) {

		  				console.log("ERROR in HTTP::POST: ",status);
		    });
            
			// $http.post(factory.rootUrl + url, data).success(successCallback);
     };
 
    factory.setGet = function(url, successCallback) {
			console.log("GET :: url: " + factory.rootUrl + url);
			$http.get(factory.rootUrl + url).success(successCallback);
        };
 
    return factory;
}