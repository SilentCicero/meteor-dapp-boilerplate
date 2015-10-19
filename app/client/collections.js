
// Basic (local) collections
// we use {connection: null} to prevent them from syncing with our not existing Meteor server

// A test persitent collection
MyCollection = new Mongo.Collection('mydb', {connection: null});
new PersistentMinimongo(MyCollection);
