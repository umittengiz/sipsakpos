const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema({
  sku: {
    type: String,
    required: true,
    unique: true
  },
  barcode: {
    type: Int,
    unique: true
  },
  name: {
    type: String,
    required: true,
  },
  amount: {
    type: Double,
    required: true,
  },
  unitId: {
    type: [mongoose.Schema.Types.ObjectId],
    required: true,
    ref: "Unit"
  },
  images: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "ProductImage"
  },
  active: {
    type: Boolean,
    required: true,
  },
  deletedAt: {
    type: Date,
  }
});

module.exports = mongoose.model("Product", ProductsSchema);
