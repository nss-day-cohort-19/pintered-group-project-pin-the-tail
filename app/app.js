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
		templateUrl: 'partials/board-view.html',
		controller: 'BoardViewCtrl'
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
		templateUrl: 'partials/board-view.html',
		controller: 'BoardViewCtrl'/*,
		resolve: {isAuth}*/
	})
	.when('/pin', {
		templateUrl: 'partials/pin-view.html',
		controller: 'PinViewCtrl'/*,
		resolve: {isAuth}*/
	})
	.when('/addBoard', {
		templateUrl: 'partials/add-editForm.html',
		controller: 'AddBoardCtrl'/*,
		resolve: {isAuth}*/
			})
	.when('/editBoard', {
		templateUrl: 'partials/add-editForm.html',
		controller: 'EditBoardCtrl'/*,
		resolve: {isAuth}*/
	})
	.when('/addPin', {
		templateUrl: 'partials/add-editForm.html',
		controller: 'AddPinCtrl'/*,
		resolve: {isAuth}*/
	})
	.when('/editPin', {
		templateUrl: 'partials/add-editForm.html',
		controller: 'EditPinCtrl'/*,
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
