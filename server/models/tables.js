const mongoose = require("mongoose");

const TablesSchema = new mongoose.Schema({
  name: {
    type: String
  },
  location: {
    type: String,
    required: true
  },
  order: {
    type: Int,
    required: true
  }
});

module.exports = mongoose.model("Table", TablesSchema);
