"use strict";

console.log("boardViewCtrl is working");

app.controller("BoardViewCtrl", function ($scope, DataFactory, $routeParams, $location, AuthFactory, $route) {

  let user = AuthFactory.getUser();
  


  DataFactory.getAllBoardPins($scope.boardId)
    .then((pins) => {
      $scope.pinss = pins;
      console.log("pins", $scope.pinss);
    });


  $scope.delPin = function(pinId) {
    // console.log("boardId", boardId);
    DataFactory.delPin(pinId)
      .then(function(){
        $route.reload();
      });
  };
});