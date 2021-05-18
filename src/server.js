'use strict';

// App Dependencies
const express = require( 'express' );
const cors = require( 'cors' );
const morgan = require( 'morgan' );

// Access module that export
const notFoundHandler = require( './error-handlers/404.js' );
const errorHandler = require( './error-handlers/500.js' );
const logger = require ( './middleware/logger.js' );
// const validator = require ( './middleware/validator.js' );
const foodRoutes = require( './routes/food.js' );
const clothesRoutes = require( './routes/clothes.js' );

// App Setup
const app = express();
app.use( express.json() );//post, put, patch
app.use( morgan( 'dev' ) );
app.use( cors() );
app.use( '/api/v1/food', foodRoutes );//access food routes
app.use( '/api/v1/clothes', clothesRoutes );//access clothes routes
app.use( logger );

// Home route
app.get( '/',( req,res )=>{
  res.send( 'Hello World!!!' );
} );

// For 404, 500
app.use( '*', notFoundHandler );
app.use( errorHandler );

//export server and listening 
module.exports = {
  server: app,
  start: ( port ) => {
    const PORT = port || 4000;
    app.listen( PORT, () => console.log( `the server is up on ${PORT}` ) );
  },
};
