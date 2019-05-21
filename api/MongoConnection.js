/* 
Provides a connection to MongoDB.
*/

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Viencimo:bbbbusdriver@cluster01-9s7ry.mongodb.net/test?retryWrites=true"; //The address of our database!
const client = new MongoClient(uri, { useNewUrlParser: true });

class MongoConnection {

    open() { //Open a connection
        return new Promise((resolve, reject) => {
            client.connect()
                .then(cluster => {
                    this.Cluster = cluster;
                    this.collection = client.db("COMP2930-Project").collection("Articles"); //the section of the database to access
                    resolve(); //success!
                })
                .catch(error => {
                    console.log(error);
                    reject(); //failure!
                });
        });
    }

    close() { //Close the connection
        if (this.Cluster) {
            this.Cluster.close()
                .catch(error => console.log(error));
        }
    }
}

module.exports = MongoConnection;