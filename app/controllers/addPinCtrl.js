"use strict";

//bind boardObj to user input
//submit btn calls addBoard, ($scope.boardObj)  
app.controller('AddBoardCtrl', function($scope, DataFactory, $location, AuthFactory) {

  let user = AuthFactory.getUser();

  $scope.obj = {
    uid: user,
    title: "",
	description: "",
	image: ""
	};

  $scope.submitTask = function () {
    // stuff goes here
    console.log("$scope.obj", $scope.obj);
    DataFactory.addPin($scope.obj)
    .then ((data) => {
    	$location.path("/addPin");
    });
  };
});