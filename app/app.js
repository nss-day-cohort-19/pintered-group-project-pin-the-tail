"use strict";

const app = angular.module('TodoApp', ["ngRoute"]);

app.config( ($routeProvider) => {
	$routeProvider
	.when('/', {
		templateUrl: 'partials/home.html',
		controller: 'HomeCtrl'
	})
	.when('/auth', {
		templateUrl: 'partials/auth.html',
		controller: 'AuthCtrl'
	})
	.when('/user', {
		templateUrl: 'partials/user-view.html',
		controller: 'UserViewCtrl'
	})
	.when('/boards', {
		templateUrl: 'partials/board-view.html',
		controller: 'BoardViewCtrl'
	})
	.when('/pin', {
		templateUrl: 'partials/pin-view.html',
		controller: 'PinViewCtrl'
	})
	.when('/addBoard', {
		templateUrl: 'partials/add-editForm.html',
		controller: 'AddBoardCtrl'
	})
	.when('/editBoard', {
		templateUrl: 'partials/add-editForm.html',
		controller: 'EditBoardCtrl'
	})
	.when('/addPin', {
		templateUrl: 'partials/add-editForm.html',
		controller: 'AddPinCtrl'
	})
	.when('/editPin', {
		templateUrl: 'partials/add-editForm.html',
		controller: 'EditPinCtrl'
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
