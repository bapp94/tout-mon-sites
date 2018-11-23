'use strict';   // Mode strict du JavaScript


function randomUtil(min, max) {

	var random = Math.floor(Math.random() * (max - min +1) + min );
	return random;
}


