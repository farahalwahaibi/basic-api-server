'use strict';

//access express
const express = require( 'express' );
//access class clothes
const Clothes = require( '../models/clothes.js' );
//create object
const clothes = new Clothes();
const router = express.Router();

//routeHandler
router.get( '/', getClothes );
router.get( '/:id', getClothesWithId );
router.post( '/', createClothes );
router.put( '/:id', updateClothes );
router.delete( '/:id', deleteClothes );

// for delete route
function deleteClothes( req, res ) {
  const resObj = clothes.delete( req.params.id );
  res.json( resObj );
}

// for put route
function updateClothes( req, res ) {
  const clothesObj = req.body;
  const resObj = clothes.update( req.params.id, clothesObj );
  res.json( resObj );
}

// for post route
function createClothes( req, res ) {
  const clothesObj = req.body;
  const resObj = clothes.create( clothesObj );
  res.status( 201 ).json( resObj );
}

// for get route
function getClothes( req, res ) {
  const resObj = clothes.read();
  res.json( resObj );
}

//for get route with id
function getClothesWithId( req, res ) {
  const resObj = clothes.read( req.params.id );
  res.json( resObj );
}

//export our route
module.exports = router;
