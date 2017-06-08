"use strict";

console.log("boardViewCtrl is working");

app.controller("BoardViewCtrl", function ($scope, DataFactory, $routeParams, $location, AuthFactory, $route) {

  let user = AuthFactory.getUser();

  $scope.boardId = $routeParams.boardID;

  console.log("$rP.bID", $routeParams.boardID);

  DataFactory.getAllBoardPins($routeParams.boardID)
    .then((pins) => {
      $scope.pins = pins;
      console.log("pins", $scope.pins);
    });

    $scope.goToEditView = (id) => {
      $location.path(`/editBoards/${id}`);
    };


  $scope.delPin = function(pinId) {
    console.log("pinId", pinId);
    DataFactory.delPin(pinId)
      .then(function(){
        $route.reload();
      });
  };
});