const express = require('express')
const router = express.Router()

const TestController = require('../controllers/test.controller')


router.get('/', function(req, res, next) {
  res.json({ status:"success", message:"Masuk Ke API", data: { "version_number":"v1.0.0" }})
})

router.get('/test', TestController.get)
router.post('/test', TestController.create)

module.exports = router