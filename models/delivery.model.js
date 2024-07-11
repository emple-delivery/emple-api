const mongoose = require('mongoose');
// models/Delivery.js
const DeliverySchema = new mongoose.Schema({
    sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    receiver: { type: String, required: true },
    address: { type: String, required: true },
    status: { type: String, default: 'pending' },
    vehicle: { type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle' },
  });
  module.exports = mongoose.model('Delivery', DeliverySchema);
  
