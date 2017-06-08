"use strict";
console.log("UserViewCtrl is working");

app.controller("UserViewCtrl", function ($scope, DataFactory, $routeParams, $location, AuthFactory, $route) {

  let user = AuthFactory.getUser();

  DataFactory.getAllBoards(user)
    .then( (boards) => {
      $scope.boards = boards;
      console.log("boards", $scope.boards);
    });


  $scope.delBoard = function(boardId) {
    // console.log("boardId", boardId);
    DataFactory.deleteYourBoard(boardId)
      .then(function(){
        $route.reload();
      });
  };

  $scope.stealBoardId = function(ID) {
  };

});