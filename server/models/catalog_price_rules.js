const mongoose = require("mongoose");

const CatalogPriceRulesSchema = new mongoose.Schema({
  productId: {
    type: [mongoose.Schema.Types.ObjectId],
    required: true,
    ref: "Product"
  },
  currencyId: {
    type: [mongoose.Schema.Types.ObjectId],
    required: true,
    ref: "Currency"
  }
});

module.exports = mongoose.model("CatalogPriceRule", CatalogPriceRulesSchema);
