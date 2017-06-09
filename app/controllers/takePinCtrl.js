"use strict";

app.controller('TakePinCtrl', function($scope, $routeParams, DataFactory, $location, AuthFactory) {

	let user = AuthFactory.getUser();

	$scope.obj = {
		user: $scope.currentUser,
		boardId: "",
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

	DataFactory.getAllBoards(user)
    .then((boards) => {
      $scope.boards = boards;
      console.log("boards", $scope.boards);
    });


  $scope.submit = function () {
    // stuff goes here
    console.log("$scope.obj", $scope.obj);
    DataFactory.createBoard($scope.obj)
    .then ((data) => {
      console.log("data", data);
    	$location.path("/boards");
    });
  };

});