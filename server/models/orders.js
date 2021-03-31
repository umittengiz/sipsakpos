const mongoose = require("mongoose");

const OrdersSchema = new mongoose.Schema({
  orderNumber: {
    type: int,
    required: true,
    unique: true
  },
  staffId: {
    type: [mongoose.Schema.Types.ObjectId],
    required: true,
    ref: "Staff"
  },
  tableId: {
    type: [mongoose.Schema.Types.ObjectId],
    required: true,
    ref: "Table"
  },
  productId: {
    type: [mongoose.Schema.Types.ObjectId],
    required: true,
    ref: "Product"
  },
  qty: {
    type: Int,
    required: true,
  },
  qtyReceived: {
    type: Int,
    required: true,
  },
  qtyDelivered: {
    type: Int,
  },
  qtyCanceled: {
    type: Int,
  },
  status: {
    type: Int,
    required: true,
  },
  attributeId: {
    type: [mongoose.Schema.Types.ObjectId],
    required: true,
    ref: "Attribute"
  }
});

module.exports = mongoose.model("Order", OrdersSchema);
