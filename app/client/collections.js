
// Basic (local) collections
// we use {connection: null} to prevent them from syncing with our not existing Meteor server

// A collection for the Accounts component
Accounts = new Mongo.Collection('accounts', {connection: null});
new PersistentMinimongo(Accounts);
