const express = require('express');
const router = express.Router();
const controllerAuth = require('../controllers/auth');

router.post(
	'/register',
	controllerAuth.register
)
router.post(
	'/login',
	controllerAuth.login
)

module.exports = router