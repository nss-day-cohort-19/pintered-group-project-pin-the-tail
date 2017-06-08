"use strict";

app.controller('EditPinCtrl', function($scope, $routeParams, DataFactory, $location) {

	$scope.obj = {
		title: "",
		description: "",
		image: ""
	};

	DataFactory.getPin($routeParams.pinID, $scope.obj)
	.then((data) => {
		console.log('pinData', data);
		$scope.obj = data;
		$scope.obj.id = $routeParams.pinID;
	});

	$scope.submit = function() {
		console.log("scope.obj", $scope.obj);
	DataFactory.editPin($routeParams.pinID, $scope.obj)
		.then(function() {
			$location.path(`/boards/${$scope.obj.boardId}`);
	});
		console.log("Edit board button clicked");
	};
});