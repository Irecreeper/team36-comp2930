/* 
This script accesses... the database! If the name didn't give it away.
Specifically, this retrieves articles from the database, and tosses them into a JSON array.
*/

const ObjectID = require('mongodb').ObjectID;
const mongoConnection = require('./mongoConnection');

const database = 'COMP2930-Project';
const collection = 'Articles';

const connect = () => new mongoConnection(); //see MongoConnection.js

class DbAccess {

    getArticles() { //called by dataRouter.js
        const connection = connect();

        return new Promise((resolve, reject) => {
            connection.open()
            .then(() => {
                connection.collection.find({articleNo: {$exists: false}}).toArray()
                .then(articles => {
                    resolve(articles);
                    //connection.close();
                })
                .catch(error => {
                    reject(error);
                    connection.close();
                });
            })
            .catch(error => {
                reject(error);
                connection.close();
            });
        });
    }

}

module.exports = DbAccess;