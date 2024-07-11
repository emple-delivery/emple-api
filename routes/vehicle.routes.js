const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicle.controller');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, vehicleController.registerVehicle);
module.exports = router;