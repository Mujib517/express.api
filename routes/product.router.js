var express = require('express');
var router = express.Router();
var productCtrl = require('./../controllers/product.ctrl');

//GET http://localhost:3000/products/
router.get('/', productCtrl.get);
router.post('/', productCtrl.save);

module.exports = router;