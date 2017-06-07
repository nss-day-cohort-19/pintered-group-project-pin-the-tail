"use strict";

console.log("CreateBoardCtrl");
//bind boardObj to user input
//submit btn calls addBoard, ($scope.boardObj)  
app.controller('CreateBoardCtrl', function($scope, DataFactory, $location, AuthFactory) {

  let user = AuthFactory.getUser();

  $scope.obj = {
    uid: user,
    title: "",
	description: "",
	image: ""
	};

  $scope.submit = function () {
    // stuff goes here
    console.log("$scope.obj", $scope.obj);
    DataFactory.createBoard($scope.obj)
    .then ((data) => {
      console.log("data", data);
    	$location.path("/boards");
    });
  };

  console.log("getUser",user);
});