const express = require('express');
const router = express.Router();
const controllerUser = require('../controllers/product');
const authMiddleware = require('../middleware/auth');

router.get(
    '/',
    controllerUser.getAllProduct
)
router.get(
    '/:id',
    controllerUser.getIdProduct
)
router.post(
    '/',
    authMiddleware.verifyJwtToken,
    authMiddleware.checkRole([1, 2]),
    controllerUser.postProduct
)
router.patch(
    '/:id',
    authMiddleware.verifyJwtToken,
    authMiddleware.checkRole([1, 2]),
    controllerUser.patchProduct
)
router.delete(
    '/:id',
    authMiddleware.verifyJwtToken,
    authMiddleware.checkRole([1, 2]),
    controllerUser.deleteProduct
)

module.exports = router