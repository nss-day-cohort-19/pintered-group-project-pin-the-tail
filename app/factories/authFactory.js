"use strict";

app.factory("AuthFactory", function(){


let currentUser = null;

let createUser = function(userObj){
    return firebase.auth().createUserWithEmailAndPassword(userObj.email, userObj.password)
    .catch( function(error){
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log("error:", errorCode, errorMessage);
    });
};

let loginUser = function(userObj) {
    return firebase.auth().signInWithEmailAndPassword(userObj.email, userObj.password)
    .catch( function(error){
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log("error:", errorCode, errorMessage);
    });
};


let logoutUser = function(){
    console.log("logoutUser");
    return firebase.auth().signOut();
};


let isAuthenticated = function (){
    console.log("AuthFactory: isAuthenticated");
    return new Promise ( (resolve, reject) => {
        firebase.auth().onAuthStateChanged( (user) => {
            if (user){
                currentUser = user.uid;
                console.log("user", currentUser);
                resolve(true);
            }else {
                resolve(false);
            }
        });
    });
};

let getUser = function(){
    return currentUser;
};

let provider = new firebase.auth.GoogleAuthProvider();

let authWithProvider= function(){
    return firebase.auth().signInWithPopup(provider);
};

// let user = firebase.auth().currentUser;
// let name, uid;
//
// if(user !==  null){
//   name = user.displayName;
//   uid = user.uid;
// }
//
// console.log("user name", name + "user uid", uid);

return {createUser, loginUser, logoutUser, isAuthenticated, getUser, authWithProvider};


});
