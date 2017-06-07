"use strict";
console.log("boardViewCtrl is working");

app.controller("BoardViewCtrl", function ($scope, DataFactory, $routeParams, $location, AuthFactory) {

  let user = AuthFactory.getUser();
  let boardId = [];


  DataFactory.getAllBoards(user)
    .then( (boards) => {
      $scope.boards = boards;
      console.log("boards", $scope.boards);
    });


  $scope.delBoard = function(boardId) {
    // console.log("boardId", boardId);
    DataFactory.deleteYourBoard(boardId)
      .then(function(){
        $location.url("#/board-View");
      });
  };
});