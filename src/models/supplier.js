const mongoose = require("mongoose");

const supplierSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    companyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Manufacturer",
      required: true,
    },
    products: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Product",
      default: [],
    },
    origin: {
      type: {
        country: { type: String, required: true },
        city: { type: String, required: true },
      },
      required: true,
    },
  },
  { timestamps: true }
);

const Supplier = mongoose.model("Supplier", supplierSchema);
module.exports = Supplier;
