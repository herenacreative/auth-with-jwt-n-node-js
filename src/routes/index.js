const express = require('express');
const router = express.Router();

const routerUser = require('./users.js');
const routerAuth = require('./auth.js');
const routerProduct = require('./product');

router.use('/users', routerUser);
router.use('/auth', routerAuth);
router.use('/product', routerProduct);

module.exports = router;

