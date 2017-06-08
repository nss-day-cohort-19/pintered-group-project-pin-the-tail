"use strict";

app.controller('EditBoardCtrl', function($scope, $routeParams, DataFactory, $location) {

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




	$scope.submit = function() {
	DataFactory.editYourBoard($scope.obj)
		.then(function() {
			$location.path("/boards");
		});
		console.log("obj", $scope.obj);
		console.log("Edit board button clicked");
	};
});