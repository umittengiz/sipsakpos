const mongoose = require("mongoose");

const WarehousesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String
  },
  phoneNumber: {
    type: Int
  }
});

module.exports = mongoose.model("Warehouse", WarehousesSchema);
