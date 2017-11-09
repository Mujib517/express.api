var express = require('express');
var router = express.Router();
var productCtrl = require('./../controllers/product.ctrl');

//GET http://localhost:3000/products/
router.get('/', productCtrl.get);
router.get('/:id', productCtrl.getById);
router.post('/', productCtrl.save);
router.delete('/:id', productCtrl.delete);
router.put('/:id', productCtrl.update);
module.exports = router;