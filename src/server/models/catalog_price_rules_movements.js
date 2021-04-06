const mongoose = require("mongoose");

const CatalogPriceRulesMovementsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  }
});

module.exports = mongoose.model("CatalogPriceRulesMovement", CatalogPriceRulesMovementsSchema);
