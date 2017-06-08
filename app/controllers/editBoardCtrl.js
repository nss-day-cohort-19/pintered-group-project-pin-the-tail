"use strict";

app.controller('EditBoardCtrl', function($scope, $routeParams, DataFactory, $location, $route) {

	$scope.obj = {
		title: "",
		description: "",
		image: ""
	};

	DataFactory.getBoard($routeParams.boardId)
	.then((data) => {
		$scope.obj = data;
		$scope.obj.id = $routeParams.boardId;
		console.log("$scope.obj", $scope.obj);
	});




	$scope.editBoard = function(boardID) {
	DataFactory.editYourBoard(boardID)
		.then(function() {
			// $route.reload();
			// $location.path("editBoard");
		});
		console.log("obj", $scope.obj);
		console.log("Edit board button clicked");
	};
});