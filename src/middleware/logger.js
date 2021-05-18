'use strict';

//logger middleware
module.exports = ( req, res, next ) => {
  console.log( '##request info##', req.method, req.path );
  next();
};
