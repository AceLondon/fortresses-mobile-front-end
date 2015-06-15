
angular.module('starter.controllers')
	.controller('UserCtrl', UserCtrl);

function UserCtrl($scope, $stateParams, ServerSvc) {

	$scope.gameId = $stateParams.gameId;
	$scope.userId = "";
	$scope.start = false;
	$scope.players = [];
	
	$scope.addUser = addUser;
	$scope.startGame = startGame;
	$scope.addUserSuccessCallback = addUserSuccessCallback;
	$scope.startGameSuccessCallback = startGameSuccessCallback;
	
	function addUser(userName){
		var userObj = JSON.stringify({userId:userName});
		var url = '/'+ $scope.gameId +'/players';
		ServerSvc.setPost(url,userObj,addUserSuccessCallback);
	}
	
	function addUserSuccessCallback(data, status, headers, config) {
        $scope.status = status;
        $scope.data = data;
		// setGameId($scope.data);
		console.log("rootURL: ",ServerSvc.rootUrl);
		console.log("status: ",$scope.status);
		console.log("data: ",$scope.data);
		// $scope.userId = "";
		// console.log("data: ",$scope.data._id);
		$scope.players = $scope.data.players;
		$scope.start = true;
		
	}
	
	function startGame(){
		//var userObj = JSON.stringify({userId:userName});
		var url = '/'+ $scope.gameId +'/start';
		ServerSvc.setPost(url,'',startGameSuccessCallback);
	}
	
	function startGameSuccessCallback(data, status, headers, config) {
        $scope.status2 = status;
        $scope.data2 = data;
		// setGameId($scope.data);
		console.log("rootURL: ",ServerSvc.rootUrl);
		console.log("status: ",$scope.status2);
		console.log("data: ",$scope.data2);
		
		ServerSvc.setGameObj($scope.data2);
		console.log("ServerSvc.gameObj: ",JSON.stringify(ServerSvc.gameObj));
		
	}
}