"use strict";
app.controller('PinViewCtrl', function($scope, $location, $routeParams, DataFactory, AuthFactory) {

	console.log("$routeParams", $routeParams);
	console.log("$routeParams", $routeParams.pinID);

	let user = AuthFactory.getUser();

  $scope.getPin = function() {
    // stuff goes here
    console.log("running getPin from PinViewCtrl");
    DataFactory.getPin($routeParams.pinID)
    .then( (stuff) => {
    	$scope.obj = stuff;
    	$scope.obj.id = $routeParams.pinID;

    });
  };

  $scope.delPin = function ( pinID ) {
    // remove a task
    DataFactory.removeTask( pinID )
    .then( () => {
      $scope.getAllPins();
    });
  };

  $scope.getPin();

});