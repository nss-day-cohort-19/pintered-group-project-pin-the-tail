"use strict";
console.log("boardViewCtrl is working");

app.controller("BoardViewCtrl", function ($scope, DataFactory, $routeParams, $location) {

  let user = $scope.$parent.getUser();
  let boardId = [];


  DataFactory.getUserBoards(user)
    .then( (boards) => {
      $scope.boards = boards;
      console.log("boards", $scope.boards);
    });

  $scope.deleteYourBoard = function(boardId) {
    // console.log("boardId", boardId);
    DataFactory.deleteABoard(boardId)
      .then(function(){
        $location.url("#/board-View");
      });
  };
});