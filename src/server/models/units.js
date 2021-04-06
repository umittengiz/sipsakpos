const mongoose = require("mongoose");

const UnitsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  }
});

module.exports = mongoose.model("Unit", UnitsSchema);
