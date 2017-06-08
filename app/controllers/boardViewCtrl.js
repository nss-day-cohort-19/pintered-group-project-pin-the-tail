"use strict";
console.log("boardViewCtrl is working");

app.controller("BoardViewCtrl", function ($scope, DataFactory, $routeParams, $location, AuthFactory, $route) {

  let user = AuthFactory.getUser();
  let boardId = [];


  DataFactory.getAllBoards(user)
    .then( (boards) => {
      $scope.boards = boards;
      console.log("boards", $scope.boards);
    });

    $scope.goToEditView = (id) => {
      $location.path(`/editBoards/${id}`);
    };


  $scope.delBoard = function(boardId) {
    // console.log("boardId", boardId);
    DataFactory.deleteYourBoard(boardId)
      .then(function(){
        $route.reload();
      });
  };
});