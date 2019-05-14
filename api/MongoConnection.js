
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Viencimo:bbbbusdriver@cluster01-9s7ry.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });

class MongoConnection {

    open() {
        return new Promise((resolve, reject) => {
            client.connect("mongodb+srv://Viencimo:bbbbusdriver@cluster01-9s7ry.mongodb.net/COMP2930-Project")
                .then(db => {
                    this.Db = db;
                    resolve();
                })
                .catch(error => {
                    console.log(error);
                    reject();
                });
        });
    }

    close() {
        if (this.Db) {
            this.Db.close()
                .catch(error => console.log(error));
        }
    }
}

module.exports = MongoConnection;