const express = require('express');

//const DataManager = require('../dataManager');
//const dataManager = new DataManager();
const dbAccess = require('../dbAccess');
const database = new dbAccess();


    const router = express.Router();

    router
        .get('/', (req, res) => {
            database
                .getArticles()
                .then(data => res.send(data))
                .catch(error => {
                    console.log(error);
                    res.send();
                })
        })


module.exports = router;