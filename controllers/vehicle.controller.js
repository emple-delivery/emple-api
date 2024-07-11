
const Vehicle = require('../models/vehicle.model');

exports.registerVehicle = async (req, res) => {
  const { type, registrationNumber } = req.body;
  try {
    const vehicle = new Vehicle({
      owner: req.user.id,
      type,
      registrationNumber,
    });
    await vehicle.save();
    res.json(vehicle);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};