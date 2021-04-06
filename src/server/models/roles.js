const mongoose = require("mongoose");

const RolesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Role", RolesSchema);
