"use strict";

app.controller('EditBoardCtrl', function($scope, $routeParams, DataFactory, $location) {

	$scope.obj = {
		title: "",
		description: "",
		image: ""
	};

	DataFactory.getBoard($routeParams.boardID)
	.then((data) => {
		$scope.obj = data;
		$scope.obj.id = $routeParams.boardID;
	});

	$scope.submitBoard = function() {
		DataFactory.editBoard($routeParams.boardID, $scope.obj)
		.then((response) => {
			$location.path("editBoard");
		});
		console.log("obj", $scope.obj);
		console.log("Edit board button clicked");
	};
});