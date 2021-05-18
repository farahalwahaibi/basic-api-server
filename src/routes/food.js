'use strict';

//access express
const express = require( 'express' );
//access class food
const Food = require( '../models/food.js' );
//create object
const food = new Food();
const router = express.Router();

//routeHandler
router.get( '/', getFood );
router.get( '/:id', getFoodWithId );
router.post( '/', createFood );
router.put( '/:id', updateFood );
router.delete( '/:id', deleteFood );

// for delete route
function deleteFood( req, res ) {
  const resObj = food.delete( req.params.id );
  res.json( resObj );
}

// for put route
function updateFood( req, res ) {
  const foodObj = req.body;
  const resObj = food.update( req.params.id, foodObj );
  res.json( resObj );
}

// for post route
function createFood( req, res ) {
  const foodObj = req.body;
  const resObj = food.create( foodObj );
  res.status( 201 ).json( resObj );
}

// for get route
function getFood( req, res ) {
  const resObj = food.read();
  res.json( resObj );
}

//for get route with id
function getFoodWithId( req, res ) {
  const resObj = food.read( req.params.id );
  res.json( resObj );
}

//export our route
module.exports = router;
