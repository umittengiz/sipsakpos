const mongoose = require("mongoose");

const ProductPricesSchema = new mongoose.Schema({
  productId: {
    type: [mongoose.Schema.Types.ObjectId],
    required: true,
    ref: "Product"
  },
  currencyId: {
    type: [mongoose.Schema.Types.ObjectId],
    required: true,
    ref: "Currency"
  },
  salePrice: {
    type: Double,
  },
  normalPrice: {
    type: Double,
    required: true,
  },
  costPrice: {
    type: Double,
  }
});

module.exports = mongoose.model("ProductPrice", ProductPricesSchema);
