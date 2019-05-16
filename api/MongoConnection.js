
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Viencimo:bbbbusdriver@cluster01-9s7ry.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });

class MongoConnection {

    open() {
        return new Promise((resolve, reject) => {
            client.connect()
                .then(cluster => {
                    this.Cluster = cluster;
                    this.collection = client.db("COMP2930-Project").collection("Articles");
                    resolve();
                })
                .catch(error => {
                    console.log(error);
                    reject();
                });
        });
    }

    close() {
        if (this.Cluster) {
            this.Cluster.close()
                .catch(error => console.log(error));
        }
    }
}

module.exports = MongoConnection;