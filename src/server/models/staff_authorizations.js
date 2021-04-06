const mongoose = require("mongoose");

const StaffAuthorizationsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("StaffAuthorization", StaffAuthorizationsSchema);
