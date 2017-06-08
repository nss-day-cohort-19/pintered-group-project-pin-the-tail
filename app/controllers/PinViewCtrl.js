"use strict";
app.controller('PinViewCtrl', function($scope, $location, $routeParams, DataFactory, AuthFactory) {

	console.log("$routeParams", $routeParams);
	console.log("$routeParams", $routeParams.pinID);

	let user = AuthFactory.getUser();
	let pinID = $routeParams.pinID;

	DataFactory.getPin(pinID)
    .then( (items) => {
      $scope.item = items;
      console.log("this is the new data", $scope.item);
    });


  $scope.delPin = function () {
    // remove a task
    console.log("this is the pin you want to delete", pinID);
    DataFactory.delPin( pinID )

		.then(function(){
        $location.path("/board-View");
      });
  };
});