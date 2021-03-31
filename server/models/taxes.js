const mongoose = require("mongoose");

const TaxesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  percentage: {
    type: Double,
    required: true
  }
});

module.exports = mongoose.model("Tax", TaxesSchema);
