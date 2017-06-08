"use strict";

app.factory("DataFactory", function($q, $http, FBCreds) {

	//*************
	//PIN FUNCTIONS
	//*************
	const addPin = (pinObj) => {
		return $q((resolve, reject) => {
			$http.post(`${FBCreds.databaseURL}/pins.json`, pinObj)
			.then ((pinID) => {
				resolve(pinID);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};

	const createPin = (newObj) => {
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

	const editPin = (pinID, editedPinObj) => {
		return $q((resolve, reject) => {
			let newObj = JSON.stringify(editedPinObj);
			$http.path(`${FBCreds.databaseURL}/pins/${pinID}.json`, newObj)
			.then((pinObj) => {
				resolve(pinObj);
			})
			.catch((error) => {
				reject(error);
			});
		});
	}; //(pinID, pinObj)

	const delPin = (pinID) => {
		console.log(`${FBCreds.databaseURL}/pins/${pinID}.json`);
		return $q((resolve, reject) => {
			$http.delete(`${FBCreds.databaseURL}/pins/${pinID}.json`)
			.then((response) => {
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
				pinObj.data.id= pinID;
				resolve(pinObj.data);
				console.log(pinObj.data);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};

	const getAllBoardPins = (boardID) => {
		let pins = [];
		console.log(`${FBCreds.databaseURL}/pins.json?orderBy="boardId"&equalTo="${boardID}"`);
		return $q((resolve, reject) => {
			$http.get(`${FBCreds.databaseURL}/pins.json?orderBy="boardId"&equalTo="${boardID}"`)
			.then((pinObjs) => {
				let pinCollection = pinObjs.data;
				Object.keys(pinCollection).forEach((key) => {
					pinCollection[key].id = key;
					pins.push(pinCollection[key]);
				});
				resolve(pins);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};

	const getAllPins = (user) => {
		let pins = [];
		return $q((resolve, reject) => {
			$http.get(`${FBCreds.databaseURL}/pins.json?orderBy="user"&equalTo="${user}"`)
			.then((pinObjs) => {
				let pinCollection = pinObjs.data;
				Object.keys(pinCollection).forEach((key) => {
					pinCollection[key].id = key;
					pins.push(pinCollection[key]);
				});
				resolve(pins);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};
	//***************
	//BOARD FUNCTIONS
	//***************

	const addBoard = (boardObj) => {
		return $q((resolve, reject) => {
			$http.post(`${FBCreds.databaseURL}/boards.json`, boardObj)
			.then ((boardID) => {
				resolve(boardID);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};

	const editYourBoard = ( boardID, editedboardObj ) => {
		return $q( ( resolve, reject ) => {
			let newObj = JSON.stringify(editedboardObj);
			$http.patch(`${FBCreds.databaseURL}/boards/${boardID}.json`, newObj)
			.then( ( response ) => {
				resolve(response);
			})
			.catch( (error) => {
				reject(error);
			});
		});
	};

	const createBoard = (newObj) => {
		return $q((resolve, reject) => {
			let object = JSON.stringify(newObj);
			$http.post(`${FBCreds.databaseURL}/boards.json`, object)
			.then ((boardID) => {
				resolve(boardID);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};

	const deleteYourBoard = (boardID) => {
		return $q ( (resolve, reject) => {
			$http.delete(`${FBCreds.databaseURL}/boards/${boardID}.json`)
			.then( (response) => {
				resolve(response);
			})
			.catch( (error) => {
				reject(error);
			});
		});
	};


	const getBoard = (boardID) => {
		return $q((resolve, reject) => {
			$http.get(`${FBCreds.databaseURL}/boards/${boardID}.json`)
			.then((response) => {
				resolve(response.data);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};

	const getAllBoards = (user) => {
		let boards = [];
		console.log(`${FBCreds.databaseURL}/boards.json?orderBy="uid"&equalTo="${user}"`);
		return $q((resolve, reject) => {
			$http.get(`${FBCreds.databaseURL}/boards.json?orderBy="uid"&equalTo="${user}"`)
			.then((boardObjs) => {
				let boardCollection = boardObjs.data;
				Object.keys(boardCollection).forEach((key) => {
					boardCollection[key].id = key;
					boards.push(boardCollection[key]);
				});
				resolve(boards);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};

	return {
		addPin,
		createPin,
		editPin,
		delPin,
		getPin,
		getAllBoardPins,
		addBoard,
		createBoard,
		editYourBoard,
		deleteYourBoard,
		getBoard,
		getAllBoards
	};

});