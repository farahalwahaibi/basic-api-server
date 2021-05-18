'use strict';

const uuid = require( 'uuid' ).v4;//random

////create template for clothes 
class Clothes {
  constructor() {
    this.db = [];
    // [{id:, data: {key, type, ...}}]
  }

  // for get method
  read( id ) {
    if ( id ) {
      return this.db.find( ( p ) => p.id === id );
    } else {
      return this.db;
    }
  }

  // for post method
  create( obj ) {
    const clothes = {
      id: uuid(),
      data: obj,
    };
    this.db.push( clothes );
    return clothes;
  }

  // for delete method
  delete( id ) {
    console.log( id );

    this.db = this.db.filter( ( clothes ) => clothes.id !== id );
    return this.db;
  }

  // for put method
  update( id, obj ) {
    for ( let i = 0; i < this.db.length; i++ ) {
      let p = this.db[i];
      if( p.id === id ) {
        this.db[i].data = obj;
        return this.db[i];
      }
    }
  }
}

module.exports = Clothes;
