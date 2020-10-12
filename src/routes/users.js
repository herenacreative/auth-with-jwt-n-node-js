const express = require('express');
const router = express.Router();
const controllerUser = require('../controllers/users');
const authMiddleware = require('../middleware/auth');

router.get(
    '/',
    authMiddleware.verifyJwtToken,
    authMiddleware.checkRole([1, 2]),
    controllerUser.getAllUsers
)
router.get(
    '/:id',
    authMiddleware.verifyJwtToken,
    authMiddleware.checkRole([1, 2]),
    controllerUser.getIdUsers
)
router.patch(
    '/:id',
    authMiddleware.verifyJwtToken,
    authMiddleware.checkRole([1, 2, 3]),
    controllerUser.patchUsers
)
router.delete(
    '/:id',
    authMiddleware.verifyJwtToken,
    authMiddleware.checkRole([1, 2]),
    controllerUser.deleteUsers
)

module.exports = router