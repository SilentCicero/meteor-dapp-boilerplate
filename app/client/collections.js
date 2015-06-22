
// Basic (local) collections
// we use {connection: null} to prevent them from syncing with our not existing Meteor server

// A collection for the Accounts component
MyCollection = new Mongo.Collection('accounts', {connection: null});
new PersistentMinimongo(MyCollection);
