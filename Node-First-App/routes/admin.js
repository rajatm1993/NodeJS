const path = require('path');

const express = require('express');

//const rootDir = require('../util/path');

const productsController = require('../controller/products');

const router = express.Router();

// admin/add-product => GET
router.get('/add-product', productsController.getAddProduct); // here passing just ref of controller
 
// admin/add-product => POST
router.post('/add-product',productsController.postAddProduct);

module.exports =  router;

