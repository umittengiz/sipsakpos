const mongoose = require("mongoose");

const SuppliersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    unique: true,
    trim: true
  },
  phoneNumber: {
    type: Int
  }
});

module.exports = mongoose.model("Supplier", SuppliersSchema);
