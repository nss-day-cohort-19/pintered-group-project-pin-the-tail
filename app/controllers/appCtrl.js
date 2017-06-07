//this is for the sign in modal, which may or may not end up being used.
//ignore this code for now.

"use strict";

console.log("AppCtrl is up and running");

app.controller('AppCtrl', function($scope, $mdDialog) {
  $scope.status = ' ';
  $scope.customFullscreen = false;

  $scope.showPrompt = function(event) {
    let confirm = $mdDialog.prompt()
      .title("sign in")
      .textContent("please sign in")
      .placeholder("enter email address")
      .ariaLabel("enter email address")
      .initialValue("name@email.com")
      .targetEvent(event)
      .ok("sign in")
      .cancel("no thanks");

    $mdDialog.show(confirm).then(function(result) {
      $scope.status = "you are signed in";
    }, function() {
      $scope.status = "please sign in";
    });
  };
});
