const mongoose = require("mongoose");

const RoleAuthorizationsMappingSchema = new mongoose.Schema({
  roleId: {
    type: [mongoose.Schema.Types.ObjectId],
    required: true,
    ref: "Role"
  },
  authorizationId: {
    type: Int,
    required: true
  }
});

module.exports = mongoose.model("RoleAuthorizationsMapping", RoleAuthorizationsMappingSchema);
