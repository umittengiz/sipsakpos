const mongoose = require("mongoose");

const ProductImagesSchema = new mongoose.Schema({
  productId: {
    type: [mongoose.Schema.Types.ObjectId],
    required: true,
    ref: "Product"
  },
  imageUrl: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("ProductImage", ProductImagesSchema);
