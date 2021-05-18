'use strict';

const { server } = require( '../src/server.js' );
const supertest = require( 'supertest' );
const req = supertest( server );

//for server api
describe ( 'server',()=>{

  // for bad route
  it( 'should get 404 status', async()=>{
    const res = await req.get( '/123' );
    expect( res.status ).toBe( 404 );
  } );

  // for bad method
  it( 'should get 404 status', async()=>{
    const res = await req.post( '/' );
    expect( res.status ).toBe( 404 );
  } );
} );



//for food api
describe( 'food api', () => {
  let id ;
  // Test create method
  it( 'should create food using POST', async () => {
    // arrange
    let food = {
      key: 'strawberry',
      type:'fruit',
    };
    //act
    const res = await req.post( '/api/v1/food' ).send( food );
    //assert
    expect( res.status ).toEqual( 201 );
    expect( res.body.data.key ).toEqual( 'strawberry' );
    expect( res.body.data.type ).toEqual( 'fruit' );
    id = res.body.id;
  } );

  // Test get method
  it( 'should return food using GET', async () => {
    const res = await req.get( '/api/v1/food' );
    expect( res.status ).toEqual( 200 );
    expect( Array.isArray( res.body ) ).toBeTruthy();
  } );

  // Test get method with id
  it( 'should return specific food data using GET', async () => {
    const res = await req.get( `/api/v1/food/${id}` );
    expect( res.body.data.key ).toEqual( 'strawberry' );
    expect( res.body.data.type ).toEqual( 'fruit' );
    expect( res.status ).toEqual( 200 );
  } );

  // Test update method
  it( 'should update specific food data using PUT', async () => {
    // arrange
    let food = {
      key: 'apple',
      type:'fruit',
    };
    const res = await req.put( `/api/v1/food/${id}` ).send ( food );
    expect( res.body.data.key ).toEqual( 'apple' );
    expect( res.body.data.type ).toEqual( 'fruit' );
    expect( res.status ).toEqual( 200 );
  } );

  // Test delete method
  it( 'should update specific food data using PUT', async () => {
    const res = await req.delete( `/api/v1/food/${id}` );
    expect( res.status ).toEqual( 200 );
  } );

} );





//for clothes api
describe( 'clothes api', () => {
  let id ;
  // Test create method
  it( 'should create clothes using POST', async () => {
    // arrange
    let clothes = {
      key: 'training',
      type:'sport',
    };
      //act
    const res = await req.post( '/api/v1/clothes' ).send( clothes );
    //assert
    expect( res.status ).toEqual( 201 );
    expect( res.body.data.key ).toEqual( 'training' );
    expect( res.body.data.type ).toEqual( 'sport' );
    id = res.body.id;
  } );

  // Test get method
  it( 'should return clothes using GET', async () => {
    const res = await req.get( '/api/v1/clothes' );
    expect( res.status ).toEqual( 200 );
    expect( Array.isArray( res.body ) ).toBeTruthy();
  } );

  // Test get method with id
  it( 'should return specific clothes data using GET', async () => {
    const res = await req.get( `/api/v1/clothes/${id}` );
    expect( res.body.data.key ).toEqual( 'training' );
    expect( res.body.data.type ).toEqual( 'sport' );
    expect( res.status ).toEqual( 200 );
  } );

  // Test update method
  it( 'should update specific clothes data using PUT', async () => {
    // arrange
    let clothes = {
      key: 'jacket',
      type:'formal',
    };
    const res = await req.put( `/api/v1/clothes/${id}` ).send ( clothes );
    expect( res.body.data.key ).toEqual( 'jacket' );
    expect( res.body.data.type ).toEqual( 'formal' );
    expect( res.status ).toEqual( 200 );
  } );

  // Test delete method
  it( 'should update specific food data using PUT', async () => {
    const res = await req.delete( `/api/v1/clothes/${id}` );
    expect( res.status ).toEqual( 200 );
  } );

} );


