
const ObjectID = require('mongodb').ObjectID;
const DbConnection = require('./MongoConnection');

const database = 'COMP2930-Project';
const collection = 'Articles';

const connect = () => new DbConnection();

class DbAccess {

}