"use strict";

const app = angular.module('PinTheTailApp', ["ngRoute"]);

let isAuth = (AuthFactory) => new Promise((resolve, reject) => {
    AuthFactory.isAutheticated()
    .then((userExists) => {
        if(userExists){
            console.log("Authenticated, go ahead");
            resolve();
        }else {
            console.log("Authentication reject, GO AWAY");
            reject();
        }
    });
});

app.config( ($routeProvider) => {
	$routeProvider
	.when('/', {
		templateUrl: 'partials/all-pins.html',
		controller: 'TakePinCtrl'
	})
	.when('/login', {
		templateUrl: 'partials/auth.html',
		controller: 'AuthCtrl'
	})
	.when('/logout', {
		templateUrl: 'partials/auth.html',
		controller: 'AuthCtrl'
	})
	.when('/user', {
		templateUrl: 'partials/user-view.html',
		controller: 'UserViewCtrl'/*,
		resolve: {isAuth}*/
	})
	.when('/boards', {
		templateUrl: 'partials/user-view.html',
		controller: 'UserViewCtrl'/*,
		resolve: {isAuth}*/
	})
	.when('/boards/:boardID', {
		templateUrl: 'partials/board-view.html',
		controller: 'BoardViewCtrl'/*
		resolve: {isAuth}*/
	}).when('/pins', {
		templateUrl: 'partials/all-pins.html',
		controller: 'AllPinsCtrl'/*,
		resolve: {isAuth}*/
	})
	.when('/pin/:pinID', {
		templateUrl: 'partials/pin-view.html',
		controller: 'PinViewCtrl'/*,
		resolve: {isAuth}*/
	})
	.when('/addBoard', {
		templateUrl: 'partials/add-editForm.html',
		controller: 'AddBoardCtrl'/*,
		resolve: {isAuth}*/
			})
	.when('/editBoard/:boardId', {
		templateUrl: 'partials/add-editForm.html',
		controller: 'EditBoardCtrl'/*,
		resolve: {isAuth}*/
	})
	.when('/addPin/:boardID', {
		templateUrl: 'partials/add-editForm.html',
		controller: 'AddPinCtrl'/*,
		resolve: {isAuth}*/
	})
	.when('/editPin/:pinID', {
		templateUrl: 'partials/add-editForm.html',
		controller: 'EditPinCtrl'/*,
		resolve: {isAuth}*/
	})
	.when('/takePin/:pinID', {
		templateUrl: 'partials/takePin.html',
		controller: 'TakePinCtrl'/*,
		resolve: {isAuth}*/
	})
	.when('/createBoard', {
		templateUrl: 'partials/add-editForm.html',
		controller: 'CreateBoardCtrl'
		// resolve: {isAuth}
	})
	.otherwise('/');
});

app.run(($location, FBCreds) => {
	let creds = FBCreds;
	let authConfig = {
		apiKey: creds.apiKey,
		authDomain: creds.authDomain,
		databaseURL: creds.databaseURL
	};

	firebase.initializeApp(authConfig);

	document.getElementById("PinTheTailApp").addEventListener("click", function(event){
        console.log(event);
    });

});
