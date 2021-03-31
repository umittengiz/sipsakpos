const mongoose = require("mongoose");

const CurrenciesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  sign: {
    type: String
  },
  abbreviation: {
    type: String,
    required: true,
    unique: true
  }
});

module.exports = mongoose.model("Currency", CurrenciesSchema);
