
angular.module('starter.controllers')
	.controller('CreateGameCtrl', CreateGameCtrl);

function CreateGameCtrl($scope, $state, $stateParams, ServerSvc) {
	
	$scope.successCallback = successCallback;
	$scope.createNewGame = createNewGame;
	$scope.setGameId = setGameId;
	$scope.goToUsers = goToUsers;
	
	//$scope.theText = '';
	$scope.gameId = '';
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
	
	function goToUsers(){
		$state.go('app.user', {'gameId':$scope.gameId});
	}
	
	function successCallback(data, status, headers, config) {
        $scope.status = status;
        $scope.data = data;
		setGameId($scope.data._id);
		// console.log("rootURL: ",ServerSvc.rootUrl);
		// console.log("status: ",$scope.status);
		// console.log("data: ",$scope.data);
		// console.log("data: ",$scope.data._id);
		
	}
}