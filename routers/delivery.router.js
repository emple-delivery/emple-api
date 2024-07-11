

const express = require('express');
const router = express.Router();
const deliveryController = require('../controllers/delivery.controller');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/createDelivery', authMiddleware, deliveryController.createDelivery);
module.exports = router;