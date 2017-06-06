"use strict";

app.factory("DataFactory", function($q, $http, FBCreds) {

//*************
//PIN FUNCTIONS
//*************
const addPin = (newObj) => {
	return $q((resolve, reject) => {
		let object = JSON.stringify(newObj);
		$http.post(`${FBCreds.databaseURL}/pins.json`, object)
		.then ((pinID) => {
			resolve(pinID);
		})
		.catch((error) => {
			reject(error);
		});
	});
};

const createPin; //(pinObj)

const postToFB;

const editPin = (pinID, pinObj) => {
	return $
}; //(pinID, pinObj)

const getPinObj = (pinID) => {
	return $q((resolve, reject) => {
		$http.get(`${FBCreds.databaseURL}/pins/${pinID}.json`)
		.then((pinObj) => {
			resolve(pinObj.data);
		})
		.catch((error) => {
			reject(error);
		});
	});
};

const delPin = (pinID) => {
	return $q((resolve, reject) => {
		$http.delete(`${FBCreds.databaseURL}/pins/${pinID}.json`)
		.then((reponse) => {
			resolve(response);
		})
		.catch((error) => {
			reject(error);
		});
	});
};

const getPin = (pinID) => {
	return $q((resolve, reject) => {
		$http.get(`${FBCreds.databaseURL}/pins/${pinID}.json`)
		.then((pinObj) => {
			resolve(pinObj.data);
		})
		.catch((error) => {
			reject(error);
		});
	});
};

const getAllPins;

//***************
//BOARD FUNCTIONS
//***************

const addBoard;

const editBoard;

const createBoard;

const getBoardObj;

const delBoard; //(boardID)

const getBoard;

const getAllBoards; 

});