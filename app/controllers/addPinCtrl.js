"use strict";

//bind boardObj to user input
//submit btn calls addBoard, ($scope.boardObj)  
app.controller('AddPinCtrl', function($scope, DataFactory, $location, AuthFactory, $routeParams) {

  let user = AuthFactory.getUser();

  console.log("$rP.BID", $routeParams.boardID);

  $scope.obj = {
  	boardId: $routeParams.boardID,
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