const mongoose = require("mongoose");

const AttributeSetsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  attributeId: {
    type: [mongoose.Schema.Types.ObjectId],
    required: true,
    ref: "Attribute"
  }
});

module.exports = mongoose.model("AttributeSet", AttributeSetsSchema);
