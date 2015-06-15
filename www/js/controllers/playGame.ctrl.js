
angular.module('starter.controllers')
	.controller('PlayGameCtrl', PlayGameCtrl);

function PlayGameCtrl($scope, $state, ServerSvc) {
	
	console.log("ServerSvc.gameObj: ",JSON.stringify(ServerSvc.gameObj));
	
	$scope.successCallback = successCallback;
	$scope.setGameId = setGameId;
	
	//$scope.theText = '';
	$scope.gameId = '';
	$scope.cards = ServerSvc.gameObj.rounds[0].characters;
	$scope.status = '';
	$scope.data = '';
	
	function createNewGame(){
		ServerSvc.setPost('', '', successCallback);
	}
	
	function setGameId(text){
		$scope.gameId = text;
		console.log($scope.gameId);
		$scope.goToUsers();
	}
	
	function successCallback(data, status, headers, config) {
        $scope.status = status;
        $scope.data = data;
		setGameId($scope.data._id);
		// console.log("rootURL: ",ServerSvc.rootUrl);
		// console.log("status: ",$scope.status);
		// console.log("data: ",$scope.data);
		// console.log("data: ",$scope.data._id);
		console.log("ServerSvc.gameObj: ",JSON.stringify(ServerSvc.gameObj));
		
	}
}