"use strict";
//
// Beekeeper: RESTful Web Service for coordinating a distributed cluster of nodes.
//
// Version: 0.0.1
// Author: Mark W. B. Ashcroft (mark [at] kurunt [dot] com)
// License: MIT or Apache 2.0.
//
// Copyright (c) 2014 Mark W. B. Ashcroft.


var util 				= require('util');			// debugging.



// Beekeeper Service.
exports.createService  = createService;
function createService(options, cb) {
	return cb(true);
}

