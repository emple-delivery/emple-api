const authRouter = require('./routes/auth.router');
const vehicleRouter = require('./routes/vehicle.router');
const deliveryRouter = require('./routes/delivery.router');
const express = require('express');
const router = express.Router();

router.use('/auth', authRouter);
router.use('/vehicles', vehicleRouter);
router.use('/deliveries', deliveryRouter);

module.exports = router;