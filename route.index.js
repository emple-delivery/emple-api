const authRouter = require('./routes/auth.routes');
const vehicleRouter = require('./routes/vehicle.routes');
const deliveryRouter = require('./routes/delivery.routes');
const express = require('express');
const router = express.Router();

router.use('/auth', authRouter);
router.use('/vehicles', vehicleRouter);
router.use('/deliveries', deliveryRouter);

module.exports = router;