/*
Handles GET requests for the server.
Makes heavy use of DbAccess.js.
*/
const express = require('express')

//const DataManager = require('../dataManager');
//const dataManager = new DataManager();
const DbAccess = require('../DbAccess')
const database = new DbAccess()

//Create router.
const router = express.Router()

router.get('/', (req, res) => {
  //Make a requeset.
  database
    .getArticles() //Get the articles...
    .then(data => res.send(data)) //...then send the data...
    .catch(error => {
      //...and catch the error if it breaks.
      console.log(error)
      res.send()
    })
})

module.exports = router
