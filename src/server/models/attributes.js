const mongoose = require("mongoose");

const AttributesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  type: {
    type: String,
    required: true
  },
  visibility: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Attribute", AttributesSchema);
