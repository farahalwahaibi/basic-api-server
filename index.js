'use strict';

// Read Environment 
require( 'dotenv' ).config();

// Access server.js file
const server = require( './src/server.js' );

// Start listening
server.start( process.env.PORT );
