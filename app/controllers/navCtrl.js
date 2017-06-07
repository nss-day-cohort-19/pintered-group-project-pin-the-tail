"use strict";
//**************************************************
//Used Brend-a-long code. Might need to change this.
//**************************************************

app.controller('NavCtrl', function($scope, AuthFactory, $window) {

  $scope.isLoggedIn = false;

  firebase.auth().onAuthStateChanged(function(user){
    if(user){
      $scope.isLoggedIn = true;
      console.log("user logged in", user, $scope.isLoggedIn);
      $scope.$apply();
    }else{
      $scope.isLoggedIn = false;
      console.log("user logged in", $scope.isLoggedIn);
      $window.location.href = "#!/login";
    }
  });
});
