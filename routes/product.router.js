var express = require('express');
var router = express.Router();
var productCtrl = require('./../controllers/product.ctrl');
var reviewCtrl = require('./../controllers/review.ctrl');

//GET http://localhost:3000/api/products/
//GET http://localhost:3000/api/products/0/10
router.get('/', productCtrl.get);
router.get('/:pageIndex/:pageSize', productCtrl.get);

router.get('/:id', productCtrl.getById);
router.post('/', productCtrl.save);
router.delete('/:id', productCtrl.delete);
router.put('/:id', productCtrl.update);
router.post('/reviews', reviewCtrl.save);


module.exports = router;