/*
Provides a connection to MongoDB.
*/

const MongoClient = require('mongodb').MongoClient
const uri =
  'mongodb+srv://Viencimo:bbbbusdriver@cluster01-9s7ry.mongodb.net/test?retryWrites=true' //The address of our database!
const client = new MongoClient(uri, { useNewUrlParser: true })

/*
    Provides methods to open and close the connection the specified collection and
    database on MongoDB.
*/
class MongoConnection {

    //Opens the connection to the specified collection
    open() {
        return new Promise((resolve, reject) => {
            client.connect()
                .then(cluster => {
                    this.Cluster = cluster;
                    this.collection = client.db("COMP2930-Project").collection("Articles"); //the section of the database to access
                    this.collectionEnergy = client.db("COMP2930-Project").collection("EnergyArticles");
                    this.collectionPollution = client.db("COMP2930-Project").collection("PollutionArticles");
                    this.collectionRecycling = client.db("COMP2930-Project").collection("RecyclingArticles");
                    resolve(); //success!
                })
                .catch(error => {
                    console.log(error);
                    reject(); //failure!
                });
        });
    }

    //Closes the connection to the database
    close() {
        if (this.Cluster) {
            this.Cluster.close()
                .catch(error => console.log(error));
        }
    }
  }
}

module.exports = MongoConnection
