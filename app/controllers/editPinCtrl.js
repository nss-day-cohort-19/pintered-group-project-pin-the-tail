"use strict";

app.controller('EditPinCtrl', function($scope, $routeParams, DataFactory, $location) {

	$scope.obj = {
		title: "",
		description: "",
		image: ""
	};

	DataFactory.getPin($routeParams.pinID)
	.then((data) => {
		$scope.obj = data;
		$scope.obj.id = $routeParams.pinID;
	});

	$scope.submitBoard = function() {
		DataFactory.editPin($routeParams.pinID, $scope.obj)
		.then((response) => {
			$location.path("editPin");
		});
		console.log("obj", $scope.obj);
		console.log("Edit pin button clicked");
	};
});