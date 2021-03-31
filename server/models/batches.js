const mongoose = require("mongoose");

const BatchesSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true,
  },
  lot: {
    type: Int,
    required: true,
    unique: true,
  },
  productId: {
    type: [mongoose.Schema.Types.ObjectId],
    required: true,
    ref: "Product"
  }
});

module.exports = mongoose.model("Batch", BatchesSchema);
