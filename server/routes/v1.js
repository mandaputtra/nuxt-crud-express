const express = require('express')
const router = express.Router()

router.get('/', function(req, res, next) {
  res.json({ status:"success", message:"Masuk Ke API", data: { "version_number":"v1.0.0" }})
})

module.exports = router