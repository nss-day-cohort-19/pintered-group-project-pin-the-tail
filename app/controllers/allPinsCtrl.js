"use strict";

app.controller("AllPinsCtrl", function ($scope, DataFactory, $routeParams, $location, AuthFactory, $route) {

  let user = AuthFactory.getUser();

  DataFactory.getAllPins()
    .then((pins) => {
      $scope.pins = pins;
      console.log("pins", $scope.pins);
    });

    $scope.takePin = (pin) => {
      $location.path(`/editPin/${pin.id}`);
    };
});