"use strict";

//bind boardObj to user input
//submit btn calls addBoard, ($scope.boardObj)  
app.controller('AddBoardCtrl', function($scope, DataFactory, $location, AuthFactory, UserViewCtrl) {

  let user = AuthFactory.getUser();

  console.log("$scope.boardId", $scope.boardId);

  $scope.obj = {
  	boardId: $scope.boardId,
    uid: user,
    title: "",
	description: "",
	image: ""
	};

  $scope.submit = function () {
    // stuff goes here
    console.log("$scope.obj", $scope.obj);
    DataFactory.addPin($scope.obj)
    .then ((data) => {
    	$location.path("/addPin");
    });
  };
});