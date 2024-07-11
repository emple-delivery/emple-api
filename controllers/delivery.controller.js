
const Delivery = require('../models/delivery.model');


exports.createDelivery = async (req, res) => {
  const { receiver, address, vehicle } = req.body;
  try {
    const delivery = new Delivery({
      sender: req.user.id,
      receiver,
      address,
      vehicle,
    });
    await delivery.save();
    res.json(delivery);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
