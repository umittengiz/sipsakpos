const mongoose = require("mongoose");

const StaffsSchema = new mongoose.Schema({
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
  roleId: {
    type: [mongoose.Schema.Types.ObjectId],
    required: true,
    ref: "Role"
  }
});

module.exports = mongoose.model("Staff", StaffsSchema);
