const mongoose = require("mongoose");

const WarehouseMovementsSchema = new mongoose.Schema({
  warehouseId: {
    type: [mongoose.Schema.Types.ObjectId],
    required: true,
    ref: "Warehouse"
  },
  productId: {
    type: [mongoose.Schema.Types.ObjectId],
    required: true,
    ref: "Product"
  },
  batchId: {
    type: [mongoose.Schema.Types.ObjectId],
    required: true,
    ref: "Batch"
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
  taxId: {
    type: [mongoose.Schema.Types.ObjectId],
    required: true,
    ref: "Tax"
  }
});

module.exports = mongoose.model("WarehouseMovement", WarehouseMovementsSchema);
