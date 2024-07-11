const mongoose = require("mongoose");

const VehicleSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  type: { type: String, required: true },
  registrationNumber: { type: String, required: true, unique: true },
});
module.exports = mongoose.model("Vehicle", VehicleSchema);
