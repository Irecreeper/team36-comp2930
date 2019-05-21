/* 
A test function.
Sends a message that the API is working properly.
*/
var express = require('express')
var router = express.Router()

router.get('/', function(req, res, next) {
  res.send('API is working properly')
})

module.exports = router
