const mongoose = require("mongoose");

const ShiftsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Shift", ShiftsSchema);
